import { pool } from '../db/database.js'

export const getCountry = async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM pais WHERE codigoPais = ?', [req.params.id])
    res.json(rows)
}

export const createCountry = async (req, res) => {
    pool.query('drop table pais;')
    pool.query('CREATE TABLE pais (codigoPais int primary key,nombrePais varchar(50) not null,capitalPais varchar(50) not null,region varchar(50) not null,poblacion long not null,latitud int not null,longitud int not null) ;')

    const jsonFile = req.body;
    jsonFile.forEach(async (e) => {
            await pool.query('INSERT INTO pais(codigoPais,nombrePais,capitalPais,region,poblacion,latitud,longitud) VALUES (?,?,?,?,?,?,?)', [e.numericCode, e.name, e.capital, e.region, e.population, e.latlng[0], e.latlng[1]])
            console.log(e.name)
    });
    res.send("Save")
};