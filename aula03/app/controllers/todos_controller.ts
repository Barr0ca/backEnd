import type { HttpContext } from '@adonisjs/core/http'
import Todo from '#models/todo'

export default class TodosController {
  public async index({}: HttpContext) {
    return await Todo.all()
  }

  public async create({ request }: HttpContext) {
    // return await Todo.create(request.only(['tarefa']))

    return await Todo.create({
      tarefa: request.input('tarefa'),
    })
  }

  public async delete({ params, response }: HttpContext) {
    const tarefa = await Todo.find(params.id)
    if (tarefa) {
      return await tarefa.delete().then(() => tarefa)
    } else {
      return response.abort(
        {
          message: 'Tarefa não encontrada.',
        },
        404
      )
    }
  }

  public async indexById({ params }: HttpContext) {
    return await Todo.findOrFail(params.id)
  }

  public async update({ params, response, request }: HttpContext) {
    const tarefa = await Todo.find(params.id)
    if (tarefa) {
      //   return await tarefa.merge({ tarefa: request.input('tarefa') }).save()
      //   tarefa.tarefa = request.input('tarefa')
      tarefa.merge(request.only(['tarefa']))
      return await tarefa.save()
    } else {
      return response.abort(
        {
          message: 'Tarefa não encontrada.',
        },
        404
      )
    }
  }
}
