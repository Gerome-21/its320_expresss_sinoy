import { createQuotes, getQuotes } from "../controller/quotesController.js";
import e from "express";

export const router = e.Router();

router.post('/create', createQuotes);

router.get('/',getQuotes)