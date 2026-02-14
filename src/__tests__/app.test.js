const request = require('supertest');
const app = require('../index');

describe('API Endpoints', () => {
  test('GET /health should return healthy status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });

  test('GET /api/items should return all items', async () => {
    const res = await request(app).get('/api/items');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(3);
  });

  test('GET /api/items/1 should return item with id 1', async () => {
    const res = await request(app).get('/api/items/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Learn Docker');
  });

  test('GET /api/items/99 should return 404', async () => {
    const res = await request(app).get('/api/items/99');
    expect(res.statusCode).toBe(404);
  });
});