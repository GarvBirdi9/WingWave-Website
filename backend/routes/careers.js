import express from 'express';
import { submitCareerApplication } from '../controllers/careersController.js';

const router = express.Router();

router.post('/', submitCareerApplication);

export default router;
