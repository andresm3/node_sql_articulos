const express = require('express');
const ArticleService = require('../services/articleService');
const ArticleValidation = require('./articleValidation');
const { statusCode } = require('../config/httpStatusCodes');

module.exports = (repositories) => {
  const router = express.Router();
  const articleService = new ArticleService(repositories);
  const articleValidation = new ArticleValidation();

/**
 * @swagger
 * /api/articles:
 *   post:
 *     summary: Crear un articulo
 *     tags: [Articulos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Articulo'
 */
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

/**
 * @swagger
 * /api/articles:
 *   put:
 *     summary: Modificar un Articulo
 *     tags: [Articulos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Articulo'
 */
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

/**
 * @swagger
 * /api/articles:
 *   get:
 *     summary: Obtener todos los articulos
 *     tags: [Articulos]
 *     responses:
 *       200:
 *         description: Lista de todos los articulos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Articulo'
 */
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
