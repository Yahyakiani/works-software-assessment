-- Create a new database
CREATE DATABASE notes_db;

-- Switch to the database
\c notes_db

-- Create a table for storing notes
CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert a sample note
INSERT INTO notes (title, content) VALUES ('Sample Note', 'This is a sample note.');
