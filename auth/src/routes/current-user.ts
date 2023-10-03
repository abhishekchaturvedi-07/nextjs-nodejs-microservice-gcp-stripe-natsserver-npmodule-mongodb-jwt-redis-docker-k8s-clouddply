import express from 'express';
const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
    res.send('Hello There from Current User Service')
})

export { router as currentUserRouter}