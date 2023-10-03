import express from 'express';
const router = express.Router();

router.post('/api/users/signout', (req, res) => {
    res.send('Hello There from Sign Out Router')
})

export { router as signoutRouter}