const axios = require('axios');
require('dotenv').config();

const getCharacters = async () => {
    const response = await axios.get(`${process.env.HP_API_BASE_URL}/characters`);
    return response.data; 
};

const getSpells = async () => {
    const response = await axios.get(`${process.env.HP_API_BASE_URL}/spells`);
    return response.data; 
};

const getStudents = async () => {
    const response = await axios.get(`${process.env.HP_API_BASE_URL}/characters/students`);
    return response.data; 
};

const getStaff = async () => {
    const response = await axios.get(`${process.env.HP_API_BASE_URL}/characters/staff`);
    return response.data; 
};

module.exports = { 
    getCharacters, 
    getSpells, 
    getStudents, 
    getStaff 
};