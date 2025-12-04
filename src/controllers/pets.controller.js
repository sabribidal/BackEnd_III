import PetModel from '../models/pet.model.js';

export const getAllPets = async (req, res) => {
try {
    const pets = await PetModel.find();
    res.json(pets);
} catch (err) {
    res.status(500).json({ error: err.message });
}
};

