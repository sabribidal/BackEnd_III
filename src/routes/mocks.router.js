import { Router } from 'express';
import { generateMockUsers } from '../services/mocks.service.js';
import { generateMockPets } from '../utils/pet.mocking.js';

const router = Router();

router.get('/users', (req, res) => {
  const users = generateMockUsers();
  res.json(users);
});

router.get('/pets', (req, res) => {
  const pets = generateMockPets();
  res.json(pets);
});

export default router;
