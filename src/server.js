const express = require('express');
const cors = require('cors');
require('dotenv').config(); 

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

const hpRoutes = require('./routes/hpRoutes');
app.use('/api/hp', hpRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor intermediario ejecutándose en http://localhost:${PORT}`);
});

