import app from '../src/index.js';
import supertest from 'supertest';
import {pool} from '../src/db.js';

const api = supertest(app)

describe('GET /empleados',  () => {
    test('should respond with a 200 status code', async () =>{
        await api.get('/api/empleados')
        .expect(200)
        .expect('Content-Type',/application\/json/); 
        
     })
})

afterAll(()=>{
    pool.end()
})