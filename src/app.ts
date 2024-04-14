// app.ts
import express from 'express';
import { Request, Response } from 'express';
import { Pool } from 'pg';
import 'dotenv/config';

// Initialize Express App
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'),
  });

// CRUD Operations
// Create a note
app.post('/notes', async (req: Request, res: Response) => {
    const { title, content } = req.body;
    const result = await pool.query('INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *', [title, content]);
    res.json(result.rows[0]);
});

// Read all notes
app.get('/notes', async (req: Request, res: Response) => {
    const result = await pool.query('SELECT * FROM notes');
    res.json(result.rows);
});

// Update a note
app.put('/notes/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const result = await pool.query('UPDATE notes SET title = $1, content = $2, updated_at = NOW() WHERE id = $3 RETURNING *', [title, content, id]);
    res.json(result.rows[0]);
});

// Delete a note
app.delete('/notes/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM notes WHERE id = $1', [id]);
    res.json({ message: 'Note deleted' });
});

export default app;