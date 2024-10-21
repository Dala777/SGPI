const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Ruta para crear un nuevo proyecto
router.post('/create', projectController.createProject);

// Ruta para obtener todos los proyectos
router.get('/', projectController.getAllProjects);

// Ruta para actualizar un proyecto
router.put('/update/:id', projectController.updateProject);

module.exports = router;
