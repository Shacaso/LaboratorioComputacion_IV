import fs from 'fs';
import { Country } from "./Country.js";
import express from 'express';
import countryRoutes from './routes/country.routes.js'
import { pool } from './db/database.js'
fs;

const app = express();

// app.use(express.json())

// app.use(countryRoutes)

app.listen(3000);
console.log('Server running on port 3000')


async function getData() {
  for (let code = 1; code < 301; code++) {
    try {
      let url = `https://restcountries.com/v2/callingcode/${code}`;
      let response = await fetch(url);
      let result = await response.json();

      result.forEach(async (e) => {
        let [exist] = await pool.query('SELECT * FROM pais WHERE codigoPais = ?', [e.numericCode])
        if (!exist[0]) {
          if (e.hasOwnProperty("capital")) {
            let aux = e.latlng;
            let countryCode = e.numericCode;
            console.log(countryCode)
            await pool.query('INSERT INTO pais(codigoPais,nombrePais,capitalPais,region,poblacion,latitud,longitud) VALUES (?,?,?,?,?,?,?)', [countryCode, e.name, e.capital, e.region, e.population, e.latlng[0], e.latlng[1]])
            console.log(`successful insert: ${countryCode}`)
          }
        }
      });

    } catch (err) {
      // console.log(err)
    }
    console.log(`cicle: ${code}`)
  }
  console.log('done!')
}


getData();
