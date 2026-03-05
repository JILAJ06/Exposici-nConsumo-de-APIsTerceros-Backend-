const hpService = require('../services/hpService');

const handleRequest = async (req, res, serviceFunction) => {
    try {
        const data = await serviceFunction();
        res.status(200).json({ success: true, data: data });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error interno del servidor.',
            error: error.message
        });
    }
};

const fetchCharacters = (req, res) => handleRequest(req, res, hpService.getCharacters);
const fetchSpells = (req, res) => handleRequest(req, res, hpService.getSpells);
const fetchStudents = (req, res) => handleRequest(req, res, hpService.getStudents);
const fetchStaff = (req, res) => handleRequest(req, res, hpService.getStaff);

module.exports = { 
    fetchCharacters, 
    fetchSpells, 
    fetchStudents, 
    fetchStaff 
};