import {MongoMemoryServer} from 'mongodb-memory-server'
import { app } from '../app'
import mongoose from 'mongoose'
import request from 'supertest'

declare global {
    var signin: () => Promise<string[]>;
  }


let mongo: any

//Hook function -> whatever we pass inside here will going to run before all of our tests start to be executed
beforeAll(async () => {

    process.env.JWT_KEY = 'random'

    mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();

    await mongoose.connect(mongoUri, {});
})

//Hook function -> whatever we pass inside here will going to run before EACH of our tests start to be executed
beforeEach(async () => {
    const collections = await mongoose.connection.db.collections() // <- delete /reset everything inside the collection

    for (let collection of collections) {
        await collection.deleteMany({});
    }
})


//Hook function -> whatever we pass inside here will going to run after ALL of our tests are complete
afterAll(async () => {
    await mongo.stop()
    await mongoose.connection.close()
})


global.signin = async () => {
    const email = 'test@test.com';
    const password = 'password';
  
    const response = await request(app)
      .post('/api/users/signup')
      .send({
        email,
        password,
      })
      .expect(201);
  
    const cookie = response.get('Set-Cookie');
  
    return cookie;
  };
  