import mongoose from "mongoose";

// An interface that describes the properties, that are required to create a new user
interface UserAttrs {
    email: string;
    password: string;
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

const User = mongoose.model('User', userSchema)

// Conflict between Typescript and Mongoose
// new User({
//     email: "asds",
//     password: 232,
//     asds:2323
// })

//Remove conflicts by interface attributes

const buildUser = ( attrs: UserAttrs) => {
    return new User(attrs)
}

// buildUser({
//     email: "asds",
//     password: "sds",
//     // asdsad:2323 <- will trow an error
// })

export {User, buildUser} 