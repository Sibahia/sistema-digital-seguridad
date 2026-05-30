import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'Directory routes' })
});

export default router;