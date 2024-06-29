const fs = require("fs");
const path = require("path");

const PATH_FILE = path.join(__dirname, "data", "departure_2024.csv");

// CONSIGNA #1 

// Debes procesar un archivo de trafico aereo txt/csv 
// el cual contiene aprox 15k de registros y debes mapear 
// los registros para ideentificar cuantos vuelos son de francia

const mainFunction = async () => {
  fs.readFile(PATH_FILE, "utf-8", (err, data) => {
    if (err) return err;
    const lineArray = data.trim().split("\n"); // Spliteo por salto de linea del csv
    let countryCounter = 0;
    for (line of lineArray) {
      if (line.includes("Dublin")) {
        countryCounter += 1;
      }
    }
    return console.log(countryCounter);
  });
};
mainFunction();
