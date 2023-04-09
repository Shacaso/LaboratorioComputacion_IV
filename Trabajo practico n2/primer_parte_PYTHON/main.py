import requests
import mysql.connector

def log(msg, var):
    print(" ")
    print(f"------------------------{msg}------------------------")
    print(var)
    print(f"-----------------------------------------------------------------")

def log_sql(msg, var):
    print(" ")
    print(f"------------------------{msg}------------------------")
    print(var['name'])
    print(f"-----------------------------------------------------------------")

def log_api(msg, var):
    print(" ")
    print(f"------------------------{msg}------------------------")
    print(var.content)
    print(f"-----------------------------------------------------------------")

if __name__ == '__main__':

    conection = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "root",
    database = "laboratorioiv"
    )

    cursor = conection.cursor()

    # print(str('"/"'))


    try:
        for code in range(1, 301):
            url = f"https://restcountries.com/v2/callingcode/{code}"
            response = requests.get(url)
            log_api("Llamada a la API",response)
            
            if(response.status_code == 200):
                response_json = response.json()
                
                i = 1
                for e in response_json:
                    sql = f"SELECT * FROM pais WHERE codigoPais = {int(e['numericCode'])};"
                    cursor.execute(sql)
                    country = cursor.fetchone()
                    log(f"Obtencion del {i}* objeto de la peticion a la API",country)
                    i = i+1
                    

                    if not country:                        

                        try:
                            query = f"INSERT INTO pais(codigoPais,nombrePais,capitalPais,region,poblacion,latitud,longitud) VALUES ({int(e['numericCode'])}, '{e['name']}', '{e['capital']}', '{e['region']}', {e['population']}, {e['latlng'][0]}, {e['latlng'][1]})"
                            cursor.execute(query)
                            conection.commit()
                            log_sql(f"Persistido correctamente",e)
                        except:
                            print("No se persistio por un error en la escritura del argumento")

    except Exception as e:
        print(e)



    cursor.close()
    conection.close()



    #         let [exist] = await pool.query('SELECT * FROM pais WHERE codigoPais = ?', [e.numericCode])
    #         if (!exist[0]) {
    #           if (e.hasOwnProperty("capital")) {
    #             let aux = e.latlng;
    #             let countryCode = e.numericCode;
    #             console.log(countryCode)
    #             await pool.query('INSERT INTO pais(codigoPais,nombrePais,capitalPais,region,poblacion,latitud,longitud) VALUES (?,?,?,?,?,?,?)', [countryCode, e.name, e.capital, e.region, e.population, e.latlng[0], e.latlng[1]])
    #             console.log(`successful insert: ${countryCode}`)
    #           }
    #         }
    #       });

    #     } catch (err) {
    #       // console.log(err)
    #     }
    #     console.log(`cicle: ${code}`)
    #   }
    #   console.log('done!')


