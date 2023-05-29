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

router.post('/save/:id', async (req, res) => {
  const data = req.body;
  console.log(data)
  res.send(data)
  if(data.id > 0) {
    pool.query(`UPDATE instrument SET ? WHERE id = ${data.id}`, [data])

  }else {
    pool.query('INSERT INTO instrument SET ?', [data])
  }
})

router.get('/delete/:id', async (req, res) => {
  const [result] = await pool.query(`DELETE FROM instrument WHERE id = ${req.params.id}`)
  let instruments = Object.values(JSON.parse(JSON.stringify(result)));
  res.json(instruments[0])
})

export default router
