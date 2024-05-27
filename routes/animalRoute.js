import express from 'express';

import {
  createAnimal,
  getAnimal,
  getAnimals,
  updateAnimal,
  deleteAnimal,
} from '../controllers/animalController.js';
import { getDocs } from '../controllers/docsController.js';
import app from '../index.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(getDocs(app));
});
router.get('/all', getAnimals);
router.post('/new', createAnimal);
router.get('/bicho/:id', getAnimal);
router.put('/update/:id', updateAnimal);
router.delete('/delete/:id', deleteAnimal);

export default router;
