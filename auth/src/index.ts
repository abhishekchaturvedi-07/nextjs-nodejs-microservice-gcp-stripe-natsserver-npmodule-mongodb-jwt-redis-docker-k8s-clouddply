const chalk = require('chalk');

import express from 'express';
import {json} from 'body-parser'

const app = express()

//METHODS

app.get('/api/users/currentuser', (req, res) => {
    res.send('Current user: Hello USER!')
})



// MIDDLEWARE
app.use(json())


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