import express from 'express';
import setupDefaultMiddleware from './setupDefaultMiddleware';

const app = express();
setupDefaultMiddleware(app);

export default app;
