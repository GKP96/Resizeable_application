import express from 'express';

const router = express();
import CountController from '../controllers/CountController.js';
router.get("/",CountController.findOne);

export default router;