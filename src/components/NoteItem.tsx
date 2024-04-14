import React from 'react';
import axios from 'axios';

interface Props {
  note: { id: number; title: string; content: string };
  setNotes: React.Dispatch<React.SetStateAction<any[]>>;
  setEditingNote: React.Dispatch<React.SetStateAction<any>>;
}

const NoteItem: React.FC<Props> = ({ note, setNotes, setEditingNote }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/notes/${note.id}`);
      setNotes(prev => prev.filter(n => n.id !== note.id));
    } catch (error) {
      console.error('Failed to delete note:', error);
    }
  };

  return (
    <div className="p-4 mb-2 bg-gray-100 rounded-lg shadow">
    <h3 className="text-lg font-semibold">{note.title}</h3>
    <p className="text-gray-700">{note.content}</p>
    <div className="flex justify-between mt-4">
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600" onClick={() => setEditingNote(note)}>Edit</button>
        <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600" onClick={handleDelete}>Delete</button>
    </div>
</div>
  );
};

export default NoteItem;
