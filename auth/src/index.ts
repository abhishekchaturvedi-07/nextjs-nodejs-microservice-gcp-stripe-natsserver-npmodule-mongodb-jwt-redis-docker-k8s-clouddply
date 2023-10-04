const chalk = require('chalk');

import {app} from './app';
import mongoose from 'mongoose';

// MIDDLEWARE
// app.use(json())

// CHeck the env variable 
if(!process.env.JWT_KEY){
    throw new Error("JWT Key must be defined")
}

const start = async () => {
    try
    {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth',
        // New Version Mongoose does not support this option object
        // {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useCreateIndex: true
        // }
        )
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error(error)
    }



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

}

start()