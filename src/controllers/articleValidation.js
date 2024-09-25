const Exception = require("../config/exceptionMiddleware");

module.exports = class ArticleValidation {
  async validateCreate(req, res, next) {
    const { nombre, precio } = req.body;
    if (!nombre || !precio) {
      next(
        new Exception(
          "BAD_REQUEST",
          "None of the required fields ('nombre', 'precio') can be null or empty"
        )
      );
    }
    next();
  }
  async validateUpdate(req, res, next) {
    const { nombre, precio } = req.body;
    if (nombre || precio) {
      next(
        new Exception(
          "BAD_REQUEST",
          "None of theese ('nombre', 'precio') can be updated"
        )
      );
    }
    next();
  }

};
