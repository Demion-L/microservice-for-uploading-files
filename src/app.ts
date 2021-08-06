import express, { Application } from 'express';

import { router as fileRouter } from './models/file.routes';

export const app: Application = express();

app.use(express.json());
app.use('/upload', fileRouter);

app.all('*', (req, res) => {
  res.sendStatus(400);
});