const Task = require("../models").Task; //importo Modelo

//exporto modulo controlador
module.exports = {
  //Defino las funciones
  home: function (req, res) {
    //la funcion recibe como argumento a la base de datos
    Task.findAll().then(function (tasks) {
      res.render("tasks/index", { tasks: tasks }); //1° ubicacion de vista | json de datos para la vista
    });
  },
};
