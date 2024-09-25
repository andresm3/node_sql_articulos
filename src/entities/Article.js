"use strict";
module.exports = class Article{
  constructor({ id, nombre, descripcion, precio, modelo }) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.modelo = modelo;
  }
};
