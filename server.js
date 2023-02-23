//Dependencias
const express = require("express");
const sqlite3 = require("sqlite3");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");

//Controladores
const tasks = require("./controllers/tasks");

//Instancio express
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//Instancio sequelize
//Argumentos: 1°nombre bd | 2° usuario | 3° contra | 4° json de config
const sequelize = new Sequelize("proyecto-back", null, null, {
  dialect: "sqlite", //tipo de bd
  storage: "./proyecto-back", //almacenamiento
});

//Mensaje de prueba de servidor en linea
app.get("/", (req, res) => {
  res.send("Servidor en linea en el puerto" + " " + 3000);
});

//Motor de vistas
app.set("view engine", "pug");

//Rutas de controladores
//1° ruta tasks | 2° funcion home
app.get("/tasks", tasks.home);

app.listen(3000);
