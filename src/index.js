import express from 'express';
import 'dotenv/config';

import routes from './routes/directory.js';
import loadMiddlewares from './middlewares/index.js';
import { errorHandler } from './middlewares/errorHandling.js';
import { startServer } from './server.js';
import './models/index.js';

const app = express();

loadMiddlewares(app);

app.use('/api', routes);
app.use(errorHandler);

startServer(app);

export default app;