import {randomBytes, scrypt} from 'crypto'

import{ promisify } from 'util'

// Convert Scrypt Callback functionality to to Promise implementation to use async await feature
const scryptAsync = promisify(scrypt)

export class Password{
    
    // Static -> we can direct use the function without instatiating the class
    // Conver password to HashPassword
    static async toHash(password:string){

        //create salt
        const  salt = randomBytes(8).toString('hex')

        //create buffer
        const buf = ( await scryptAsync(password, salt, 64) ) as Buffer // <- typecast to Buffer

        return `${buf.toString('hex')}.${salt}`
    }

    // Static -> we can direct use the function without instatiating the class
    // Compare the Signin password to the stored password
    static async compare(storedPassword:string, suppliedPassword:string){
        // Remove hased password from stored password
        const [hashedPassword, salt] = storedPassword.split('.')

        // supplied password convert to buf
        const buf = ( await scryptAsync(suppliedPassword, salt, 64) ) as Buffer // <- typecast to Buffer

        return buf.toString('hex') === hashedPassword
    }
}