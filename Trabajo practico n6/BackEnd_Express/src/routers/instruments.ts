import express from 'express'
import { pool } from '../database/connect'
const router = express.Router()

router.get('/getAll', async (_req, res) => {
  const [result] = await pool.query('SELECT * FROM instrument')
  let instruments = Object.values(JSON.parse(JSON.stringify(result)));
  res.json(instruments)
})

router.get('/get/:id', async (req, res) => {
    const [result] = await pool.query(`SELECT * FROM instrument WHERE id = ${req.params.id}`)
    let instruments = Object.values(JSON.parse(JSON.stringify(result)));
    res.json(instruments[0])
})

export default router
