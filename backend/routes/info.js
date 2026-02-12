import express from 'express';

const router = express.Router();

router.get('/info', (req, res) => {
  res.json({
    message:
      'Welcome to Wingwave Technologies! We are a leading provider of advanced unmanned aerial systems (UAS) for defense and aerospace applications.'
  });
});

export default router;
