import express from "express";
import instrumentRouter from './routers/instruments'
const cors = require('cors')


const app = express();
app.use(express.json());
app.use(cors("*"))

const PORT = 6757;


app.use('/api/instruments', instrumentRouter);

// app.get("/ping", (_req, res) => {
//   console.log("someone pinged here!!!");
//   res.send("pong");
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
