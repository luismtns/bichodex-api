import express from 'express';
import cors from 'cors';

import config from './config.js';
import animalRoute from './routes/animalRoute.js';

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use('/api', animalRoute);

app.listen(config.port, () => console.log(`Server is live @ ${config.hostUrl}`));
