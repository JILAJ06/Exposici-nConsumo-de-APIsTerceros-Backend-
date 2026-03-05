const axios = require('axios');
require('dotenv').config();

const getCharacters = async () => {
    try {
        const response = await axios.get(`${process.env.HP_API_BASE_URL}/characters`);
        
        return response.data; 
    } catch (error) {
        console.error('Error en hpService:', error.message);
        throw new Error('Fallo al comunicarse con la API de Harry Potter');
    }
};

module.exports = {
    getCharacters
};