#!/bin/bash

# Install dependencies and run backend
cd ./backend
echo "PORT=4000" > ".env"
echo "JWT_SECRET=abc123" >> .env
echo "Installing Nest.js dependencies..."
npm install
echo "Starting backend server..."
npm run start &

# Install dependencies and run frontend
cd ../frontend
echo "VITE_API_URL=http://localhost:4000/api" > ".env"
echo "Installing frontend dependencies"
npm install
echo "Starting frontend..."
npm run dev &

wait
