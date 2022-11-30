CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE empleado (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salario INT DEFAULT NULL,
    PRIMARY KEY(id)
);

DESCRIBE empleado;


INSERT INTO empleado VALUES (0,"Sergio",1125),(1,"Jared",1175),(2,"Robert",1300);

SELECT * FROM empleado;

