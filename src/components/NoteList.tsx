import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteItem from './NoteItem';
import NoteForm from './NoteForm';

const NoteList: React.FC = () => {
  const [notes, setNotes] = useState<any[]>([]);
  const [editingNote, setEditingNote] = useState<any>(null);

  useEffect(() => {
    const fetchNotes = async () => {
      const { data } = await axios.get('http://localhost:3000/notes');
      setNotes(data);
    };
    fetchNotes();
  }, []);

  return (
    <div className="container mx-auto px-4">
    <NoteForm setNotes={setNotes} note={editingNote} />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map(note => (
            <NoteItem key={note.id} note={note} setNotes={setNotes} setEditingNote={setEditingNote} />
        ))}
    </div>
</div>
  );
};

export default NoteList;
