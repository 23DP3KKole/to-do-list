const Task = require('../models/taskModel')
const mongoose = require('mongoose');

const getTasks = async (req, res) => {
    const tasks = await Task.find({}).sort({createdAt: -1})

    res.status(200).json(tasks)
}

const createTask = async (req, res) => {
    const {title, description, status} = req.body

    try {
        const task = await Task.create({title, description, status})
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteTask = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such task'})
    }

    const task = await Task.findOneAndDelete({_id: id})

    if(!task) {
        return res.status(400).json({error: 'No such task'})
    }

    res.status(200).json(task)
}

const updateTask = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such task'})
    }

    const task = await Task.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!task) {
        return res.status(400).json({error: 'No such task'})
    }

    res.status(200).json(task)
}

module.exports = {
    createTask,
    getTasks,
    deleteTask,
    updateTask
}