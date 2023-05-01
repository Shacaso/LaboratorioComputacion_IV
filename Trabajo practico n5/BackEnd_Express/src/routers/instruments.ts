import express from "express";
import {getAllInstruments, getInstrument} from "../services/instrumentService";

const router = express.Router();

router.get('/getAll', (_req, res) => {
    getAllInstruments().then(e => res.send((e)));
})

router.get('/get/:id', (req, res) => {
    const country = getInstrument(req.params.id)
    country.then(e => res.send(e))
})

export default router;