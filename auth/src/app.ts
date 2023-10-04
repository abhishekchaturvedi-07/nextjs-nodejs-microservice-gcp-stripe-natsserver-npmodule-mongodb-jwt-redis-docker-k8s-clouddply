import 'express-async-errors'

import { NotFoundError } from './errors/not-found-error';
import cookieSession from 'cookie-session';
import { currentUserRouter } from './routes/current-user';
import { errorHandler } from './middlewares/error-handler';
import express from 'express';
import {json} from 'body-parser'
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';

const app = express()

app.set('trust proxy', true)

//METHODS - ROUTERS
app.use(json())
app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
}))
app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)
// Old Approach
// app.all('*', () => {
//     throw new NotFoundError()
// })
//ASYNC
// app.all('*', async (req, res, next) => {
//     next(new NotFoundError())
// })
app.all('*', async (req, res, next) => {
    throw new NotFoundError() // By installing express-async-errors
})
app.use(errorHandler)
// app.use(NotFoundError)

export {app}