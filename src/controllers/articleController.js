const express = require('express');
const ArticleService = require('../services/articleService');
const ArticleValidation = require('./articleValidation');
const { statusCode } = require('../config/httpStatusCodes');

module.exports = (repositories) => {
  const router = express.Router();
  const articleService = new ArticleService(repositories);
  const articleValidation = new ArticleValidation();

  router.post(
    '/',
    articleValidation.validateCreate,
    async (req, res, next) => {
      try {
        const data = await articleService.create(req.body);
        res.status(statusCode.CREATED).json(data);
      } catch (e) {
        next(e);
      }
    }
  );

  router.put(
    '/:id',
    articleValidation.validateUpdate,
    async (req, res, next) => {
      try {
        const id = req.params.id;
        const data = await articleService.updateById(id, req.body);
        res.status(statusCode.OK).json(data);
      } catch (e) {
        next(e);
      }
    }
  );

  router.get(
    '/',
    async (req, res, next) => {
      try {
        const data = await articleService.getArticles();
        res.status(statusCode.OK).json(data);
      } catch (e) {
        next(e);
      }
    }
  );

  return router;
};
