const chalk = require('chalk');

import 'express-async-errors'

import { NotFoundError } from './errors/not-found-error';
import { currentUserRouter } from './routes/current-user';
import { errorHandler } from './middlewares/error-handler';
import express from 'express';
import {json} from 'body-parser'
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';

const app = express()

//METHODS - ROUTERS
app.use(json())
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





// MIDDLEWARE
// app.use(json())


// LISTENING
app.listen(3000, () => {
    console.log(
        chalk.green(
            chalk.bgGreen(
                'AUTH ' 
            )
            +
            chalk.hex('#FFA500')(
                ' ---> '
            )
            +
            chalk.blue.underline.bold(
                'Listening on PORT'
            )
            +
            chalk.italic.hex('#FFA500')(
                ' 3000!!!' 
            )
    ));
})