const { where } = require("sequelize");

const Task = require("../models").Task; //importo Modelo

//exporto modulo controlador
module.exports = {
  //Defino las funciones
  index: function (req, res) {
    Task.findAll().then((tasks) => {
      res.render("tasks/index", { tasks: tasks });
    });
  },
  show: function (req, res) {
    Task.findByPk(req.params.id).then(function (task) {
      res.render("tasks/show", { task: task });
    });
  },
  create: function (req, res) {
    Task.create({
      description: req.body.description,
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  update: function (req, res) {
    Task.update(
      { description: req.body.description }, //cambio la description
      {
        where: {
          id: req.params.id, //donde el id ingresado coincida con el buscado
        },
      }
    ).then(function (response) {
      res.redirect("/tasks/" + req.params.id);
    });
  },
  edit: function (req, res) {
    Task.findByPk(req.params.id).then(function (task) {
      res.render("tasks/edit", { task });
    });
  },
  destroy: function (req, res) {
    Task.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (contadorElementosEliminados) {
      res.redirect("/tasks");
    });
  },
  new: function (req, res) {
    res.render("tasks/new");
  },
};
