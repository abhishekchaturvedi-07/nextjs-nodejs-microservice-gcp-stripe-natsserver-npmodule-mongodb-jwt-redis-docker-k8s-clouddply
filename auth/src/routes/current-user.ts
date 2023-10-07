// import { currentUser } from '../middlewares/current-user';  <- modifying it to calling it from common library
import {currentUser, requireAuth} from '@codewithac/microservice-next-gke-common'

// import { requireAuth } from '../middlewares/require-auth'; <-- calling above 
import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, requireAuth, (req, res) => {
    
    // Moved this code to currentUser Middleware 
    // if(!req.session?.jwt){
    //     res.send({currentuser: null})
    // }

    // try{
    //     const payload = jwt.verify(
    //         req.session?.jwt,
    //         process.env.JWT_KEY!
    //     )
    //     res.send({currentuser: payload})
    // }catch(err){
    //     res.send({currentUser : null})
    // }

    // Use just this middleware
    res.send({currentUser: req.currentUser || null })
})

export { router as currentUserRouter}