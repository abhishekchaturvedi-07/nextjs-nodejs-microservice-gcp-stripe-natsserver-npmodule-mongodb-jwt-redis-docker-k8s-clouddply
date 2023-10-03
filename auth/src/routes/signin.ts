import express from 'express';
const router = express.Router();

router.post('/api/users/signin', (req, res) => {
    res.send('Hello There from Sign In Router')
})

export { router as signinRouter}