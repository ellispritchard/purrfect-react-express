import path from 'path';
import express, { Request, Response, NextFunction } from 'express';

import { api } from './api';

const app = express();

// static routes for front end
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.send("index.html");
  } catch (error) {
    next(error);
  }
});

// mount api
app.use('/api', api);

export {
  app
};
