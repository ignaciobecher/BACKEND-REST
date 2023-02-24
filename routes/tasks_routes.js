const express = require("express");
let TasksController = require("../controllers/tasks");

let router = express.Router();

router.route("/tasks").get(TasksController.index).post(TasksController.create);

router.get("/tasks/new", TasksController.new); //usa get porque solo muestra info

router
  .route("/tasks/:id")
  .get(TasksController.show)
  .put(TasksController.update) //importante que esta ruta vaya debajo de la ruta que busca todos, sino la anula
  .delete(TasksController.destroy);

router.get("/tasks/:id/edit", TasksController.edit);

module.exports = router;
