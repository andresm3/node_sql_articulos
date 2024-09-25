'use strict';

const Article = require('../entities/Article');
const Exception = require('../config/exceptionMiddleware');

module.exports = class ArticleRepository {
  constructor(database, DataTypes) {
    this.attributes = {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      nombre: { type: DataTypes.STRING, 
        allowNull: false, 
        unique: true 
      },
      descripcion: { type: DataTypes.STRING, allowNull: true },
      modelo: { type: DataTypes.STRING, allowNull: true },
      precio: { type: DataTypes.DOUBLE, allowNull: false },
      createdAt: { type: DataTypes.DATE, allowNull: false },
      updatedAt: { type: DataTypes.DATE, allowNull: false },
    };
    this.options = {
      tableName: 'articulos',
      paranoid: false,
    };

    this.model = database.define('Article', this.attributes, this.options, { indexes: [{unique: true, fields: ["nombre"]}]});
    // this.migrate(database);
    this.dtoFields = [
      'id',
      'nombre',
      'descripcion',
      'modelo',
      'precio',
    ];
  }

  async migrate(database) {
    await database.sync({ force: true });
  }

  async createOne(object) {
    const article = new Article(object);
    const db = this.model.build(article);
    await db.save();
    return {nombre: article.nombre, descripcion: article.descripcion, precio: article.precio, modelo: article.modelo};
  }
  
  async updateById(id, object) {
    const article = new Article(object);
    const { descripcion, modelo } = article;
    await this.model.update({descripcion, modelo}, { where: { id } });
    return {nombre: article.nombre, descripcion: article.descripcion, precio: article.precio, modelo: article.modelo};
  }

  async findArticleByName(name) {
    const data = await this.model.findOne({
      where: { name },
      attributes: this.dtoFields,
    });
    if (!data) throw new Exception('NOT_FOUND', 'Article not found');
    return data;
  }

  async getArticles() {
    return this.model.findAll({ attributes: this.dtoFields });
  }

};
