import React from 'react';
import { render, screen } from '@testing-library/react';
import NoteList from './NoteList';

describe('NoteList Component', () => {
    const notes = [
        { id: 1, title: 'First Note', content: 'First content' },
        { id: 2, title: 'Second Note', content: 'Second content' }
    ];

    test('renders multiple note items', () => {
        render(<NoteList notes={notes} />);
        expect(screen.getAllByText(/note/i).length).toBe(2);
    });
});
