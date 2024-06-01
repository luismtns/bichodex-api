import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';

import config from './config.js';
import router from './routes/animalRoute.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());

//routes
app.use('/api', router);

app.listen(config.port, () => console.log(`Server is live @ ${config.hostUrl}`));

export default app;
