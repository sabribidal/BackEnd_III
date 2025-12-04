import { Router } from "express";
import mongoose from "mongoose";

const router = Router();


const adoptionSchema = new mongoose.Schema({
petName: { type: String, required: true },
adopterName: { type: String, required: true },
date: { type: String, required: true }
});

const Adoption = mongoose.models.Adoption || mongoose.model("Adoption", adoptionSchema);


router.get("/", async (req, res) => {
try {
    const adoptions = await Adoption.find();
    res.status(200).json(adoptions);
} catch (err) {
    res.status(500).json({ error: err.message });
}
});


router.get("/:id", async (req, res) => {
try {
    const adoption = await Adoption.findById(req.params.id);
    if (!adoption) return res.status(404).json({ error: "Adoption not found" });
    res.status(200).json(adoption);
} catch (err) {
    res.status(400).json({ error: "Invalid ID" });
}
});


router.post("/", async (req, res) => {
try {
    const newAdoption = new Adoption(req.body);
    const saved = await newAdoption.save();
    res.status(201).json(saved);
} catch (err) {
    res.status(400).json({ error: err.message });
}
});


router.put("/:id", async (req, res) => {
try {
    const updated = await Adoption.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Adoption not found" });
    res.status(200).json(updated);
} catch (err) {
    res.status(400).json({ error: "Invalid ID" });
}
});


router.delete("/:id", async (req, res) => {
try {
    const deleted = await Adoption.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Adoption not found" });
    res.status(200).json({ message: "Adoption deleted" });
} catch (err) {
    res.status(400).json({ error: "Invalid ID" });
}
});

export default router;
