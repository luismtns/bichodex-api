import express from 'express';

import {
  createAnimal,
  getAnimal,
  getAnimals,
  updateAnimal,
  deleteAnimal,
} from '../controllers/animalController.js';

const router = express.Router();

router.get('/', getAnimals);
router.post('/new', createAnimal);
router.get('/bicho/:id', getAnimal);
router.put('/update/:id', updateAnimal);
router.delete('/delete/:id', deleteAnimal);

export default router;
