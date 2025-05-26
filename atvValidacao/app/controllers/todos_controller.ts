import type { HttpContext } from '@adonisjs/core/http'
import Todo from '#models/todo'

// Importando os validadores
import { updateTarefaValidator, createTarefaValidator } from '#validators/tarefa'

export default class TodosController {
  public async index({}: HttpContext) {
    return await Todo.all()
  }

  public async create({ request }: HttpContext) {

    const data = request.all() // Recebendo o dado

    // Validando o dado para verificar se o tamanho é de 3 caracteres
    await createTarefaValidator.validate(data)

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
    
    const data = request.all() // Recebendo o dado

    if (tarefa) {
      // Validando o dado para verificar se o tamanho é de 3 caracteres
      await updateTarefaValidator.validate(data)
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

  public async updateFlag({ params, response }: HttpContext) {
    const flag = await Todo.find(params.id)
    if (flag) {
      flag.feita = !flag.feita
      return await flag.save()
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
