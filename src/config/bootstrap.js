'use strict';

const { database, DataTypes } = require('./mysqlDb');

const ArticleRepository = require('../repositories/articleRepository');

module.exports = () => {
  const articleRepository = new ArticleRepository(database, DataTypes);

  const appContext = {
    repositories: {
      articleRepository,
    }
  };
  

  //database.sync({ force: false });

  return appContext;
};
