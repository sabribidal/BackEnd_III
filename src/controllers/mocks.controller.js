import { generateMockUsers, generateMockPets } from '../services/mocks.service.js';

export const getMockUsers = (req, res) => {
const users = generateMockUsers(50);
res.json(users);
};

export const getMockPets = (req, res) => {
const pets = generateMockPets(50);
res.json(pets);
};
