import { Router } from "express";
import { getEmpleados, getEmpleadoByid,createEmpleados, updateEmpleados,deleteEmpleados} from "../controllers/empleados.controller.js";


const router = Router();

router.get('/empleados',getEmpleados);
router.get('/empleados/:id',getEmpleadoByid);
router.post('/empleados',createEmpleados);
router.put('/empleados/:id',updateEmpleados);
router.delete('/empleados/:id',deleteEmpleados);

export default router;

