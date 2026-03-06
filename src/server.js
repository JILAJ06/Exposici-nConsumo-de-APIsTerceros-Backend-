const hpRoutes = require('./routes/hpRoutes');
const PORT = process.env.PORT || 3001;

const express = require('express');
const cors = require('cors');
require('dotenv').config(); 

const app = express();

app.use(cors({
    origin: [
        'http://localhost:3000', 
        process.env.FRONTEND_URL 
    ],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

app.use('/api/hp', hpRoutes);

app.listen(PORT, () => {
    console.log(`Servidor intermediario ejecutándose en http://localhost:${PORT}`);
});

