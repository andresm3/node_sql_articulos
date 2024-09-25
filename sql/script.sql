
CREATE DATABASE IF NOT EXISTS almacen;

use almacen;
 
CREATE TABLE IF NOT EXISTS  `articulos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `precio` decimal(9,2) NOT NULL,
  `modelo` varchar(10) DEFAULT NULL,
  `createdAt` DATE,
  `updatedAt` DATE,
  PRIMARY KEY (`id`),
  UNIQUE (`nombre`)
);
