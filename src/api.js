const express = require('express');
const articleController = require('./controllers/articleController');

module.exports = ({repositories}) => {
  const api = express();
  
  api.use('/articles', articleController(repositories));
  api.use((err, req, res, next) => {
    next(err)
  });

  return api;
};
