import express from 'express';
const router = express.Router();

router.post('/api/users/signout', (req, res) => {
    if(!req.session?.jwt){
        res.send('Already signed out!')
    }
    else{
        req.session = null
        res.send({})
    }
    // res.send('Hello There from Sign Out Router')
})

export { router as signoutRouter}