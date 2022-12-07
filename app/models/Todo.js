const { model, Schema } = require('mongoose')

const todoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    default: null
  },
  completado: {
    type: Boolean,
    default: false
  }
},
{ timestamps: true })

todoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
  }
})

const Todo = model('Todo', todoSchema)

const create = async (newTodoData) => {
  const newTodo = new Todo(newTodoData)

  const todo = await newTodo.save()
  return todo
}

const findById = async (id) => {
  const todo = await Todo.findById(id)
  return todo
}

const findByIdAndUpdate = async (id, newTodoData) => {
  return await Todo.findByIdAndUpdate(id, newTodoData, { new: true })
}

module.exports = { create, findById, findByIdAndUpdate }
