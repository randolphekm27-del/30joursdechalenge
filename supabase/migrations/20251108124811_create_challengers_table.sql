/*
  # Create challengers table

  1. New Tables
    - `challengers`
      - `id` (uuid, primary key) - Unique identifier for each challenger
      - `email` (text, unique) - Challenger's email address
      - `name` (text) - Challenger's name
      - `objective` (text) - Their 30-day challenge objective
      - `start_date` (timestamptz) - When they joined the challenge
      - `created_at` (timestamptz) - Record creation timestamp
      
  2. Security
    - Enable RLS on `challengers` table
    - Add policy for public read access (to display all challengers)
    - Add policy for public insert (to allow signup)
*/

CREATE TABLE IF NOT EXISTS challengers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  objective text NOT NULL,
  start_date timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE challengers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view challengers"
  ON challengers
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can sign up as a challenger"
  ON challengers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);