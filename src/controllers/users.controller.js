import UserModel from '../models/user.model.js';

export const getAllUsers = async (req, res) => {
try {
    const users = await UserModel.find();
    res.json(users);
} catch (err) {
    res.status(500).json({ error: err.message });
}
};
