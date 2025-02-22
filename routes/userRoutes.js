import { createUser } from "../controller/userController.js";
import e from "express";

export const router = e.Router();

router.post('/create', createUser);

router.get('/', (req, res) => {
    res.send('Hello from Users Route')
})