import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NoteItem from './NoteItem';

describe('NoteItem Component', () => {
    const note = { id: 1, title: 'Sample Note', content: 'Content here' };
    const mockDelete = jest.fn();

    test('displays the note title and content', () => {
        render(<NoteItem note={note} onDelete={mockDelete} />);
        expect(screen.getByText('Sample Note')).toBeInTheDocument();
        expect(screen.getByText('Content here')).toBeInTheDocument();
    });

    test('calls onDelete when delete button is clicked', () => {
        render(<NoteItem note={note} onDelete={mockDelete} />);
        const deleteButton = screen.getByText(/delete/i);
        fireEvent.click(deleteButton);
        expect(mockDelete).toHaveBeenCalledWith(1);
    });
});
