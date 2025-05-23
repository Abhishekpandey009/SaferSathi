/*
  # Initial Schema Setup for SafarSathi

  1. New Tables
    - `profiles`
      - User profiles with verification status
    - `vehicles`
      - Vehicle information for drivers
    - `rides`
      - Available rides and their details
    - `bookings`
      - Ride booking records
    - `ratings`
      - User ratings and reviews

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  full_name text NOT NULL,
  phone_number text,
  is_driver boolean DEFAULT false,
  is_verified boolean DEFAULT false,
  aadhaar_number text,
  license_number text,
  rating numeric(3,2) DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create vehicles table
CREATE TABLE IF NOT EXISTS vehicles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  vehicle_type text NOT NULL,
  model text NOT NULL,
  registration_number text NOT NULL UNIQUE,
  seat_capacity integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create rides table
CREATE TABLE IF NOT EXISTS rides (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  driver_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  vehicle_id uuid REFERENCES vehicles(id) ON DELETE CASCADE,
  origin text NOT NULL,
  destination text NOT NULL,
  departure_time timestamptz NOT NULL,
  available_seats integer NOT NULL,
  cost_per_seat numeric(10,2) NOT NULL,
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ride_id uuid REFERENCES rides(id) ON DELETE CASCADE,
  passenger_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  seats_booked integer NOT NULL,
  total_cost numeric(10,2) NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create ratings table
CREATE TABLE IF NOT EXISTS ratings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  from_user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  to_user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  ride_id uuid REFERENCES rides(id) ON DELETE CASCADE,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE rides ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE ratings ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can read all profiles"
  ON profiles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Vehicles policies
CREATE POLICY "Anyone can view vehicles"
  ON vehicles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Drivers can manage their vehicles"
  ON vehicles FOR ALL
  TO authenticated
  USING (owner_id = auth.uid());

-- Rides policies
CREATE POLICY "Anyone can view active rides"
  ON rides FOR SELECT
  TO authenticated
  USING (status = 'active');

CREATE POLICY "Drivers can manage their rides"
  ON rides FOR ALL
  TO authenticated
  USING (driver_id = auth.uid());

-- Bookings policies
CREATE POLICY "Users can view their bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (passenger_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM rides 
      WHERE rides.id = ride_id 
      AND rides.driver_id = auth.uid()
    ));

CREATE POLICY "Users can create bookings"
  ON bookings FOR INSERT
  TO authenticated
  WITH CHECK (passenger_id = auth.uid());

-- Ratings policies
CREATE POLICY "Anyone can view ratings"
  ON ratings FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create ratings for completed rides"
  ON ratings FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM bookings 
      WHERE bookings.ride_id = ratings.ride_id 
      AND bookings.passenger_id = auth.uid()
      AND bookings.status = 'completed'
    )
  );