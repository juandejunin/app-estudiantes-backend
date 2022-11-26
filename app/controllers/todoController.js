const todoService = require('../services/todoService')

const crearTodo = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await todoService.crearTodo(req)
    const response = {
      success,
      data,
      errorMsg
    }
    res.status(statusCode).json(response)
  } catch (error) {
    next(error)
  }
}

module.exports = { crearTodo }
