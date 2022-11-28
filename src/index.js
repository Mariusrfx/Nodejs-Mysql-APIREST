
import express from 'express';
import indexRoutes from './routes/index.routes.js';
import empleadosRoutes from './routes/empleados.routes.js';

const app = express();

app.use(indexRoutes);
app.use(empleadosRoutes);

app.listen(3000);


console.log("El servidor esta corriendo en el puerto 3000"); 