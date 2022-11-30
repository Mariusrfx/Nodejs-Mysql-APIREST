import { pool } from "../db.js";

export const getEmpleados = async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM empleado')
    res.json(rows)
}

export const createEmpleados = async (req,res) => {
    const {name,salario} = req.body
    const [rows] = await pool.query('INSERT INTO empleado (name,salario) VALUES (?,?)',[name,salario])
    res.send({
        id: rows.insertId,
        name,
        salario,
    })
}

export const updateEmpleados = (req,res) => res.send('actualizando empleados')

export const deleteEmpleados = (req,res) => res.send('borrando empleados')

 