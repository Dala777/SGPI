import axios from 'axios';

const API_URL = 'http://localhost:5000/api/objetivos';

export const getObjetivos = () => axios.get(API_URL);
export const updateObjetivoGeneral = (id, data) => axios.put(`${API_URL}/general/${id}`, data);
export const updateObjetivoEspecifico = (id, data) => axios.put(`${API_URL}/especifico/${id}`, data);
export const deleteObjetivoEspecifico = (id) => axios.delete(`${API_URL}/especifico/${id}`);
