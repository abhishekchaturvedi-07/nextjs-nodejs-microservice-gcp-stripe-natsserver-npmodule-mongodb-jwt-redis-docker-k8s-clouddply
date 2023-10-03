import { Password } from "../services/password";
import mongoose from "mongoose";

// An interface that describes the properties, that are required to create a new user
interface UserAttrs {
    email: string;
    password: string;
}


// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc>{
    build(attrs: UserAttrs):UserDoc
}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document<any>{
    email: string;
    password: string;
    // createdAt: string;
    // updatedAt: string;
}





const userSchema = new mongoose.Schema({
    email:{
        type: 'string',
        required: true
    },
    password:{
        type: 'string',
        required: true
    }
})


// Hasing the password

userSchema.pre('save', async function(done) {
    if(this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'))
        this.set('password', hashed)
    }
    done()
})


// STATICS -> so that we need not to export 2 consts
userSchema.statics.build = (attrs : UserAttrs) => {
    return new User(attrs)
}



const User = mongoose.model<UserDoc, UserModel>('User', userSchema)

// Conflict between Typescript and Mongoose
// new User({
//     email: "asds",
//     password: 232,
//     asds:2323
// })

//Remove conflicts by interface attributes

// const buildUser = ( attrs: UserAttrs) => {
//     return new User(attrs)
// }

// buildUser({
//     email: "asds",
//     password: "sds",
//     // asdsad:2323 <- will trow an error
// })


const user = User.build({
    email: "asd@sd.sd",
    password: "sdsad"
})

user.email
user.password
// user.createdAt <- throw an error


export {User} 