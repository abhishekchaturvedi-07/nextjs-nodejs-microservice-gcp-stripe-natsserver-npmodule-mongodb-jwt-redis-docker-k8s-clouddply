import {body, validationResult} from 'express-validator'
import express, {Request, Response} from 'express';

import { DatabaseConnectionError } from '../errors/database-connection-error';
import { RequestValidationError } from '../errors/request-validation-error';
const bodyParser = require('body-parser')

const router = express.Router();
router.use(bodyParser.json())

router.post('/api/users/signup',[
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ], (req : Request, res: Response) => {
    
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

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }
    console.log("Creating a user...");
    throw new DatabaseConnectionError();
    

   


})

export { router as signupRouter}