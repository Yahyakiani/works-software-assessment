import request from 'supertest';
import app from '../app';  


describe('Note API', () => {
    let testNoteId: number;  // To store ID of the note created during tests

    // Test POST /notes
    it('should create a new note', async () => {
        const response = await request(app)
            .post('/notes')
            .send({
                title: 'Test Note',
                content: 'This is a test note'
            })
            .expect(200);

        expect(response.body).toHaveProperty('id');
        testNoteId = response.body.id;  // Save the note ID for use in later tests
        expect(response.body.title).toBe('Test Note');
        expect(response.body.content).toBe('This is a test note');
    });

    // Test GET /notes
    it('should retrieve all notes', async () => {
        const response = await request(app)
            .get('/notes')
            .expect(200);

        expect(response.body).toBeInstanceOf(Array);
    });

    // Test PUT /notes/:id
    it('should update an existing note', async () => {
        const response = await request(app)
            .put(`/notes/${testNoteId}`)
            .send({
                title: 'Updated Test Note',
                content: 'This is an updated test note'
            })
            .expect(200);

        expect(response.body.title).toBe('Updated Test Note');
        expect(response.body.content).toBe('This is an updated test note');
    });

    // Test DELETE /notes/:id
    it('should delete an existing note', async () => {
        await request(app)
            .delete(`/notes/${testNoteId}`)
            .expect(200);

        // Verify the note is deleted
        await request(app)
            .get(`/notes/${testNoteId}`)
            .expect(404);  // Not Found, as the note should be deleted
    });
});

