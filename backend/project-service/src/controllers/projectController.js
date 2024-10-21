const db = require('../config/database');

// Crear un nuevo proyecto
exports.createProject = (req, res) => {
    const { codigoSis, nombre, descripcion, palabrasClave, areaEnfoque, integrador, semestre, sede } = req.body;
    const query = 'INSERT INTO proyectos (codigo_sis, nombre_proyecto, descripcion, palabras_clave, area_enfoque, integrador, semestre, sede) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [codigoSis, nombre, descripcion, palabrasClave, areaEnfoque, integrador, semestre, sede], (err, result) => {
        if (err) {
            console.error('Error al crear el proyecto:', err.message, err.stack);
            return res.status(500).json({ error: 'Error al crear el proyecto' });
        }        
        res.status(201).json({ message: 'Proyecto creado exitosamente' });
    });
};


// Obtener todos los proyectos
exports.getAllProjects = (req, res) => {
    const query = 'SELECT * FROM proyectos';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener los proyectos:', err);
            return res.status(500).json({ error: 'Error al obtener los proyectos' });
        }
        res.status(200).json(results);
    });
};

// Actualizar un proyecto
exports.updateProject = (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, palabrasClave, areaEnfoque, integrador, semestre, sede } = req.body;
    const query = 'UPDATE proyectos SET nombre = ?, descripcion = ?, palabrasClave = ?, areaEnfoque = ?, integrador = ?, semestre = ?, sede = ? WHERE id = ?';
    db.query(query, [nombre, descripcion, palabrasClave, areaEnfoque, integrador, semestre, sede, id], (err, result) => {
        if (err) {
            console.error('Error al actualizar el proyecto:', err);
            return res.status(500).json({ error: 'Error al actualizar el proyecto' });
        }
        res.status(200).json({ message: 'Proyecto actualizado exitosamente' });
    });
};
