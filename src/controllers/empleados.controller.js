import { pool } from "../db.js";

export const getEmpleados = async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM empleado')
    res.json(rows)
}
export const getEmpleadoByid = async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM empleado WHERE id= ?',[req.params.id])
    if(rows.length<=0) return res.status(404).json({
        message: "Empleado no encontrado"
    })
    res.json(rows[0])
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

export const updateEmpleados = async (req,res) => {
    const id = req.params.id
    const {name,salario} = req.body
    const [result] = await pool.query('UPDATE empleado SET name = ?,salario = ? WHERE id = ?',[name,salario,id])
    if(result.changedRows===0) return res.status(404).json({
        message: "Empleado no encontrado"
    })

    const [rows] = await pool.query('SELECT * FROM empleado WHERE id= ?',[id])
    res.json(rows)
}

export const deleteEmpleados = async (req,res) => {
    const [result] = await pool.query('DELETE FROM empleado WHERE id=?',[req.params.id])
    if(result.affectedRows<=0) return res.status(404).json({
        message: "Empleado no encontrado"
    })
    res.send(res.status(200).json({
        message: "El empleado se ha borrado correctamente"
    }))
}

 