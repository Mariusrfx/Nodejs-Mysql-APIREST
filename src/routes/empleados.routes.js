import { Router } from "express";
import { createEmpleados, deleteEmpleados, getEmpleados, updateEmpleados } from "../controllers/empleados.controller.js";


const router = Router();

router.get('/empleados',getEmpleados);
router.post('/empleados',createEmpleados);
router.put('/empleados',updateEmpleados);
router.delete('/empleados',deleteEmpleados);

export default router;

