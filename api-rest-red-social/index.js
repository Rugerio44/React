//Importar dependencias

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { connection } = require('./database/connection');

//Bienvenida 

console.log('API NODE para RED SOCIAL arracada!!');

//Crear servidor node

const app = express();
const puerto = 3900;

//Configurar cors

app.use(cors());

//Convertir los datos del body a objetos js 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cargar conf rutas

const UserRoutes = require('./routes/user');
const PublicationRoutes = require('./routes/publication');
const FollowRoutes = require('./routes/follow');

app.use("/api", UserRoutes);
app.use("/api", PublicationRoutes);
app.use("/api", FollowRoutes); 

//Ruta de prueba
app.get('/ruta-prueba', (req, res) => {
    return res.status(200).json({
        mensaje: 'Ruta de prueba'
    });
});

//Poner servidor a escuchar peticiones HTTP
app.listen(puerto, () => { 
    console.log(`Servidor corriendo en Puerto:${puerto}`);
}); 

//Conexion a la BD

connection();