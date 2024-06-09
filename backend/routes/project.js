const express = require('express');
const { updateProjects, createProjects, deleteProjects, getAllProjects } = require('../controllers/project');
const router = express.Router();
router
//CRUD
.get("/", getAllProjects)
.post("/add", createProjects)
.delete("/",  deleteProjects)
.post("/", updateProjects)

module.exports = router



