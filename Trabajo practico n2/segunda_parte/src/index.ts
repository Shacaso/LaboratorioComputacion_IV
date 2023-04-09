const mongoose = require('mongoose')
import { MongoClient } from "mongodb";

const MONGODB_URI = `mongodb://127.0.0.1:27017`;


const client = new MongoClient(MONGODB_URI);

const insertCountriesAPI = async (countries) => {
  // for (let code = 1; code < 301; code++) {
  //     try {
  //       let url = `https://restcountries.com/v2/callingcode/${code}`;
  //       let response = await fetch(url);
  //       let result = await response.json();

  //       result.forEach(async (e) => {
  //         const exist = await countries.findOne({ codigoPais: e.numericCode });
  //         if (!exist) {
  //           if (e.hasOwnProperty("capital")) {
  //             let country = {
  //               codigoPais: e.numericCode,
  //               nombrePais: e.name,
  //               capitalPais: e.capital,
  //               region: e.region,
  //               poblacion: e.population,
  //               latitud: e.latlng[0],
  //               longitud: e.latlng[1]
  //             }
  //             await countries.insertOne(country);
  //           }

  //         } else {
  //           console.log("im alive")
  //         }

  //       });

  //     } catch (err) {
  //       console.log(err)
  //     }
  //     console.log(`cicle: ${code}`)
  //   }
  //   console.log('done!')
}


async function run() {

  try {

    const database = client.db("paises_db");
    const countries = database.collection("paises");

    // for (let code = 1; code < 301; code++) {
    //   try {
    //     let url = `https://restcountries.com/v2/callingcode/${code}`;
    //     let response = await fetch(url);
    //     let result = await response.json();

    //     result.forEach(async (e) => {
    //       const exist = await countries.findOne({ codigoPais: e.numericCode });
    //       if (!exist) {
    //         if (e.hasOwnProperty("capital")) {
    //           let country = {
    //             codigoPais: e.numericCode,
    //             nombrePais: e.name,
    //             capitalPais: e.capital,
    //             region: e.region,
    //             poblacion: e.population,
    //             latitud: e.latlng[0],
    //             longitud: e.latlng[1]
    //           }
    //           await countries.insertOne(country);
    //         }

    //       } else {
    //         console.log("im alive")
    //       }

    //     });

    //   } catch (err) {
    //     console.log(err)
    //   }
    //   console.log(`cicle: ${code}`)
    // }
    // console.log('done!')

    // await log(countries, { region: "Americas" }, "FIND FOR REGION: AMERICAS");

    // await log(countries, { region: "Americas", poblacion: { $gte: 100000000 } }, "FIND FOR REGION: AMERICAS, POPULATION: 100000000")

    // await log(countries, { region: { $ne: "Africa" } }, "FIND FOR REGION: NOT AFRICA")

    // await updateEgypt(countries);

    // await deleteByCode(countries, 258);

    // Al momento de ejecutar la funcion "drop()" sobre una coleccion, esta misma desaparecera con todos sus datos dentro, igualmente para lo misco con la base de datos

    // await log(countries, {poblacion: {$gt:50000000, $lt: 150000000}}, "FIND FOR POPULATION: MORE 5... LESS 15...")

    // await sortByName(countries);

    // await skipDocuments(countries);

    // await findByRegex(countries);

    let result = await countries.createIndex( { "codigoPais" : 1 },{unique: true,sparse: true,expireAfterSeconds: 3600})
    await result.forEach(console.dir);


  } finally {

    await client.close();

  }

}

run().catch(console.dir);




async function findByRegex(countries) {
  let result = await countries.find({ nombrePais: { $regex: /na$/ } });
  await result.forEach(console.dir);
}

async function skipDocuments(countries) {
  let result = await countries.find().skip(10);
  await result.forEach(console.dir);
}

async function sortByName(countries) {
  const result = await countries.find().sort({ "nombrePais": 1 });
  await result.forEach(console.dir);
}

async function deleteByCode(countries,code) {
  console.log(countries.find({ codigoPais: code }))
  await countries.deleteOne({ codigoPais: code });
  console.log(countries.find({ codigoPais: code }))

}

async function updateEgypt(countries) {
  const result = await countries.findOne({ nombrePais: "Egypt" });
  console.log(result);
  let updateCountry = {
    codigoPais: result.codigoPais,
    nombrePais: "Egipto",
    capitalPais: result.capitalPais,
    region: result.region,
    poblacion: 95000000,
    latitud: result.latitud,
    longitud: result.longitud
  };
  await countries.replaceOne({ nombrePais: "Egypt" }, updateCountry, { upsert: true });
  const resultMOD = await countries.findOne({ nombrePais: "Egipto" });
  console.log(resultMOD);
}

async function log(countries, query, msg) {
  console.log(`-----------------------------${msg}-----------------------------`)
  const result = await countries.find(query, { sort: { codigoPais: 1 } });
  await result.forEach(console.dir);
  console.log(`----------------------------------------------------------------`)

}

