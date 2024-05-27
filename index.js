import express from 'express';
import cors from 'cors';

import config from './config.js';
import router from './routes/animalRoute.js';

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use('/api', router);

app.listen(config.port, () => console.log(`Server is live @ ${config.hostUrl}`));

export default app;
