const hpService = require('../services/hpService');

const fetchCharacters = async (req, res) => {
    try {
        const data = await hpService.getCharacters();

        res.status(200).json({
            success: true,
            data: data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno del servidor. No se pudieron obtener los datos.',
            error: error.message
        });
    }
};

module.exports = {
    fetchCharacters
};