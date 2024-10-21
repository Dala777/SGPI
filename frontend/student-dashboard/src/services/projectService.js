import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerProject = async (projectData) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/projects/create`, projectData);
        return response.data;
    } catch (error) {
        console.error('Error al registrar el proyecto:', error);
        throw error;
    }
};
