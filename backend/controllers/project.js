const Project = require("../models/project")

const getAllProjects = (req, res) => res.send("get all project")

const createProjects = async (req, res) => {
    const { title, desc, img, username, url } = req.body
    const result = await Project.create({ title, desc, img, username, url })
    console.log(" result:", result)
    res.send(result)
}


const updateProjects = (req, res) => res.send("Update project")

const deleteProjects = async (req, res) => {
    const { id } = req.body
    const result = await Project.findByIdAndDelete({ _id: id })
    res.send(result)
}



module.exports = { getAllProjects, createProjects, updateProjects, deleteProjects }