import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Props {
  note?: { id: number; title: string; content: string };
  setNotes: React.Dispatch<React.SetStateAction<any[]>>;
}

const NoteForm: React.FC<Props> = ({ note, setNotes }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = note ? 'put' : 'post';
    const url = note ? `http://localhost:3000/notes/${note.id}` : 'http://localhost:3000/notes';

    try {
      const { data } = await axios[method](url, { title, content });
      setNotes(prev => note ? prev.map(n => n.id === data.id ? data : n) : [...prev, data]);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Failed to submit note:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-8 p-4 bg-white rounded-lg shadow">
    <h2 className="text-xl font-bold mb-4">{note ? 'Edit Note' : 'Add New Note'}</h2>
    <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter title"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
        />
    </div>
    <div className="mb-6">
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
        <textarea
            id="content"
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="Enter content"
            rows={3}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
        />
    </div>
    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {note ? 'Update Note' : 'Add Note'}
    </button>
</form>
  );
};

export default NoteForm;
