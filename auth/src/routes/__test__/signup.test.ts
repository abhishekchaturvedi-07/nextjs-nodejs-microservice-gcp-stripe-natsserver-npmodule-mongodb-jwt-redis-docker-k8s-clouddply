import { Password } from './../../services/password';
import {app} from '../../app'
import request from 'supertest'

it('returns a 201 on successful signup', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email:"abc@xyz.com",
            password:"password"
        })
        .expect(201)
})

it('returns a 400 with an invalid email', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email:"abcsdsd",
            password:"password"
        })
        .expect(400)
})

it('returns a 400 with an invalid password', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email:"abcsdsd",
            password:"a"
        })
        .expect(400)
})

it('returns a 400 with a missing email and  password', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: ""
        })
        .expect(400)

    await request(app)
        .post('/api/users/signup')
        .send({
            password:""
        })
        .expect(400)
})

it('disallows duplicate emails', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: "abc@xyz.com",
            password: "password"
        })
        .expect(201)

    await request(app)
        .post('/api/users/signup')
        .send({
            email:"abc@xyz.com",
            passwor: "password"
        })
        .expect(400)
})

it('sets a cookie after successfull signup', async () => {
    const response = await request(app)
        .post('/api/users/signup')
        .send({
            email: "abc@xyz.com",
            password: "password"
        })
        .expect(201)
        expect(response.get('Set-Cookie')).toBeDefined()
})