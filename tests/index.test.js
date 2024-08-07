const request = require('supertest');
const app = require('../src/index');

describe('HealthCheck', () => {
    it('should return OK', async() => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('ok');
    });
});