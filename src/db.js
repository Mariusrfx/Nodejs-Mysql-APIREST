import {createPool} from 'mysql2/promise';

//Equivalente a una conexiona a la base de datos

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'companydb'
});
