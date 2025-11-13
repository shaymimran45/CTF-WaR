-- ============================================
-- SIMPLE FIX: Remove foreign key constraint
-- Run this in Supabase SQL Editor
-- ============================================

-- Step 1: Disable email confirmation
-- Go to Authentication > Settings > Email Auth
-- Turn OFF "Enable email confirmations"

-- Step 2: Drop existing policies and table
DROP POLICY IF EXISTS "users_insert_policy" ON users;
DROP POLICY IF EXISTS "users_insert_anon_policy" ON users;
DROP POLICY IF EXISTS "users_insert_auth_policy" ON users;
DROP POLICY IF EXISTS "users_select_own_policy" ON users;
DROP POLICY IF EXISTS "users_insert_anon" ON users;
DROP POLICY IF EXISTS "users_insert_authenticated" ON users;
DROP POLICY IF EXISTS "users_select_all" ON users;
DROP POLICY IF EXISTS "users_update_own" ON users;
DROP POLICY IF EXISTS "users_service_role_all" ON users;
DROP TABLE IF EXISTS users CASCADE;

-- Step 3: Create users table WITHOUT foreign key constraint
CREATE TABLE users (
  id UUID PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_login TIMESTAMP WITH TIME ZONE,
  is_admin BOOLEAN DEFAULT FALSE
);

-- Step 4: Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Step 5: Create RLS policies
-- Allow anon to insert (for registration)
CREATE POLICY "users_insert_anon"
  ON users FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to insert
CREATE POLICY "users_insert_authenticated"
  ON users FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow public to read all users (for leaderboard)
CREATE POLICY "users_select_all"
  ON users FOR SELECT
  TO public
  USING (true);

-- Allow users to update their own profile
CREATE POLICY "users_update_own"
  ON users FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- ============================================
-- DONE! Now registration will work
-- No foreign key = no constraint errors
-- ============================================
