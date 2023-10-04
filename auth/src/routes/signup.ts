import express, {Request, Response} from 'express';

import { BadRequestError } from '../errors/bad-request-error';
import { User } from '../models/user'; // <- To connect to the database
import {body} from 'express-validator'
import jwt from 'jsonwebtoken'
import { validateRequest } from '../middlewares/validate-request';

// import { DatabaseConnectionError } from '../errors/database-connection-error'; <- No needed because no it will be handled by User model


const bodyParser = require('body-parser')

const router = express.Router();
router.use(bodyParser.json())

router.post('/api/users/signup',[
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ], 
  validateRequest,
  async (req : Request, res: Response) => {
    
    // res.send('Hello There from Sign Up Router')
    // const { email, password} = req.body

    // Manual Validator if we got info about the user inputed properties
    // if(!email || typeof email !== 'string')
    // {
    //     res.status(404).send('Provide a valid email')
    // }
    // But we will take help from a library : express-validator
    
    //Automated Validation Result by Express Validator
    // const errors = validationResult(req)
    // if(!errors.isEmpty()) {
    //     res.status(400).send(errors.array())
    // }
    
    // console.log('Creating a user...', req.body)
    // res.send({})

    // Calling from middleware
    // const errors = validationResult(req);

    // if (!errors.isEmpty()) {
    //   throw new RequestValidationError(errors.array());
    // }
    // Emd Calling from Middleware

    
    // No needed to test like this 
    // console.log("Creating a user...");
    // throw new DatabaseConnectionError();
    

    // Instead user User Model now
    // *********MAIN CODE TO CONNECT TO DB STARTS HERE********
    
    const { email, password }  = req.body;

    //check if this email already exists

    const existingUser = await User.findOne({ email: email });

    if(existingUser)
    {
      // console.log("Email already exists", email);
      // return res.send(email+' <- already exists');
      throw new BadRequestError('Email already exists')
    }
   
    // Create new user and save it to database

    const user = User.build({email, password})
    await user.save()  // <-To save user to database 
    console.log("New User created", user)

    // Generate JWT token
    
    const userJWT = jwt.sign({
      id: user.id,
      email: user.email
    }, 
    process.env.JWT_KEY!
    )

    // Store it on session object
    req.session = {
      jwt: userJWT
    }

    res.status(201).send(user)

})

export { router as signupRouter}