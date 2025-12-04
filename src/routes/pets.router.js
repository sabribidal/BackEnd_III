import { Router } from 'express';
import PetsModel from '../models/pet.model.js';
import mongoose from 'mongoose';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Pets
 *   description: Endpoints para gestionar mascotas
 */

router.get('/', async (req, res) => {
  try {
    const pets = await PetsModel.find();
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:petId', async (req, res) => {
  const { petId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(petId))
    return res.status(400).json({ message: 'ID inválido' });
  try {
    const pet = await PetsModel.findById(petId);
    if (!pet) return res.status(404).json({ message: 'Mascota no encontrada' });
    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const pet = await PetsModel.create(req.body);
    res.status(201).json({ message: 'Mascota creada', pet });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:petId', async (req, res) => {
  const { petId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(petId))
    return res.status(400).json({ message: 'ID inválido' });
  try {
    const pet = await PetsModel.findByIdAndUpdate(petId, req.body, { new: true, runValidators: true });
    if (!pet) return res.status(404).json({ message: 'Mascota no encontrada' });
    res.status(200).json({ message: 'Mascota actualizada', pet });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:petId', async (req, res) => {
  const { petId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(petId))
    return res.status(400).json({ message: 'ID inválido' });
  try {
    const pet = await PetsModel.findByIdAndDelete(petId);
    if (!pet) return res.status(404).json({ message: 'Mascota no encontrada' });
    res.status(200).json({ message: 'Mascota eliminada', pet });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
