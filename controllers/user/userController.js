//Controller para las funciones de los usuarios

import User from "../../models/user.js";
//import bcrypt from "bcrypt";
//import jwt from "jsonwebtoken";
//import passport from "passport";

// Create user
const create = async (req, res) => {
    const { username, password, email, role } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            username,
            password: hashedPassword,
            email,
            role
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// Login
const login = async (req, res) => {
    
}

const loginForm = (req, res) => {
    res.render('user/login');
}

// Para obtener un usuario, función asíncrona
const getById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
// Para obtener todos los usuarios
const getAll = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Para actualizar un usuario
const update = async (req, res) => {
    const { username, password, email, role } = req.body;
    try {
        const user = await User.findById(req.params.id);
        user.username = username;
        user.password = password;
        user.email = email;
        user.role = role;
        const updatedUser = await user.save();
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// Para borrar usuarios
const deletes = async (req, res) => {
    try {
        await User.findByIdAndRemove(req.params.id);
        res.status(200).json({ message: "User deleted" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
//Exportamos 
export default { create, login,loginForm,  getById,getAll, update, deletes };