import type { HttpContext } from '@adonisjs/core/http'
import Todo from '#models/todo'

export default class TodosController {
    public async index({ request }: HttpContext) {
        return await Todo.all()
    }

    public async create({ request }: HttpContext) {
        // return await Todo.create(request.only(['tarefa']))

        return await Todo.create({
            tarefa: request.input('tarefa'),
        })
    }
}