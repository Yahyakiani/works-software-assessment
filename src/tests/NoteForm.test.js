import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NoteForm from './NoteForm';

describe('NoteForm Component', () => {
    test('renders NoteForm for adding a new note', () => {
        render(<NoteForm />);
        const inputElement = screen.getByPlaceholderText(/enter title/i);
        expect(inputElement).toBeInTheDocument();
    });

    test('allows entering text', () => {
        render(<NoteForm />);
        const inputTitle = screen.getByPlaceholderText('Title');
        fireEvent.change(inputTitle, { target: { value: 'New Note' } });
        expect(inputTitle.value).toBe('New Note');
    });

    test('submits the form', async () => {
        const mockSubmit = jest.fn();
        render(<NoteForm onSubmit={mockSubmit} />);
        const submitButton = screen.getByRole('button', { name: /add note/i });
        fireEvent.click(submitButton);
        await waitFor(() => expect(mockSubmit).toHaveBeenCalled());
    });
});
