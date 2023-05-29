const cors = require('cors')
import express from 'express'
const morgan = require('morgan')
import instrumentRouter from './routers/instruments'

const app = express()
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded()); 

app.set('port', process.env.PORT || 3001);

app.use('/api/instruments', instrumentRouter);

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`)
})
