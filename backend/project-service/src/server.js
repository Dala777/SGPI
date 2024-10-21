const express = require('express');
const dotenv = require('dotenv');
const projectRoutes = require('./routes/projectRoutes'); // Agregar esta línea cuando crees las rutas
const db = require('./config/database');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Configurar rutas para proyectos
app.use('/api/projects', projectRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

const cors = require('cors');
cors.enable()
app.use(cors());
