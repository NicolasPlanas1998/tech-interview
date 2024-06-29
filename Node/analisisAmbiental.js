const fs = require("fs");
const path = require("path");

const PATH_FILE = path.join(__dirname, "data", "airport_traffic_2016.csv");

// CONSIGNA #2

// Debes procesar un archivo de analisis ambiental de servicios de monitorizacion de IoT(sensores) txt/csv,
// el cual contiene aprox 1.000.000 de registros y debes mapear los registros...

//! Acá readFile rompe ya que solo permite leer 2g de información
const mainFunction = async () => {
  //createReadStream() -> Sirve para estos casos de grandes volumenes de información
  // Me particiona la información en bloques de 16 kb
  fs.createReadStream(PATH_FILE, "utf-8").on("data", (data) => {
    console.log(Buffer.byteLength(data));
  });
};
mainFunction();
