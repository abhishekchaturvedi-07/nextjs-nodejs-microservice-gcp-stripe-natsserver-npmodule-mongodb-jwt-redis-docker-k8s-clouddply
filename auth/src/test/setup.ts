import {MongoMemoryServer} from 'mongodb-memory-server'
import { app } from '../app'
import mongoose from 'mongoose'

let mongo: any

//Hook function -> whatever we pass inside here will going to run before all of our tests start to be executed
beforeAll(async () => {
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