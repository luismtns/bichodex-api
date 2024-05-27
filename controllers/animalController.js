import Animal from '../models/animalModel.js';
import firebase from '../firebase.js';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const db = getFirestore(firebase);

const COLLETION_NAME = 'bichos';

export const createAnimal = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, COLLETION_NAME), data);
    res.status(200).send('Bicho adicionado com sucesso');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getAnimals = async (req, res, next) => {
  try {
    const animals = await getDocs(collection(db, COLLETION_NAME));
    const animalArray = [];

    if (animals.empty) {
      res.status(400).send('Nenhum bicho encontrado');
    } else {
      animals.forEach((doc) => {
        const animal = new Animal(
          doc.id,
          doc.data().name,
          doc.data().description,
          doc.data().dreams,
          doc.data().number
        );
        animalArray.push(animal);
      });

      res.status(200).send(animalArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getAnimal = async (req, res, next) => {
  try {
    const id = req.params.id;
    const animal = doc(db, COLLETION_NAME, id);
    const data = await getDoc(animal);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('Bicho não encontrado');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateAnimal = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const animal = doc(db, COLLETION_NAME, id);
    await updateDoc(animal, data);
    res.status(200).send('Bicho atualizado com sucesso');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteAnimal = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, COLLETION_NAME, id));
    res.status(200).send('Bicho deletado com sucesso');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
