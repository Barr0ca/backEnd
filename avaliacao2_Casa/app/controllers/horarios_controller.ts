import Horario from '#models/horario'
import type { HttpContext } from '@adonisjs/core/http'

export default class HorariosController {
  public async index({}: HttpContext) {
    return await Horario.query().preload('sala')
  }

  public async store({ request }: HttpContext) {
    const data = request.only(['sala_id', 'semana', 'inicio', 'final'])
    return await Horario.create(data)
  }

  public async delete({ params, response }: HttpContext) {
    try {
      const sala = await Horario.findOrFail(params.id)
      await sala.delete()
      return { message: 'Sala deletada com sucesso' }
    } catch {
      return response.status(404).json('Horário não encontrado.')
    }
  }

  public async update({ params, request, response }: HttpContext) {
    try {
      const sala = await Horario.findOrFail(params.id)
      const data = request.only(['sala_id', 'semana', 'inicio', 'final'])
      sala.merge(data)
      await sala.save()
      return sala
    } catch {
      return response.status(404).json('Horário não encontrado.')
    }
  }
}
