
import express from 'express';
import indexRoutes from './routes/index.routes.js';
import empleadosRoutes from './routes/empleados.routes.js';
import {PORT} from './config.js';

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use('/api',empleadosRoutes);

app.listen(PORT);

export default app;
//console.log("El servidor esta corriendo en el puerto "+PORT); 

