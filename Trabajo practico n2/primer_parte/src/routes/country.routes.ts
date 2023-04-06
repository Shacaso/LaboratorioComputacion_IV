import {Router} from 'express'
import {pool} from '../db/database.js'
import {createCountry,getCountry} from '../controllers/country.controlles.js'


const router = Router()

  
  router.post('/country', createCountry);

  router.get('/country/:id', getCountry);

export default router;