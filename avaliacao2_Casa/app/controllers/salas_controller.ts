import type { HttpContext } from '@adonisjs/core/http'
import Sala from '#models/sala'

export default class SalasController {
  public async index({}: HttpContext) {
    return await Sala.all()
  }

  public async store({ request }: HttpContext) {
    const data = request.only(['nome', 'capacidade'])
    return await Sala.create(data)
  }

  public async delete({ params, response }: HttpContext) {
    try {
      const sala = await Sala.findOrFail(params.id)
      await sala.delete()
      return { message: 'Sala deletada com sucesso' }
    } catch {
      return response.status(404).json('Sala não encontrada.')
    }
  }

  public async update({ params, request, response }: HttpContext) {
    try {
      const sala = await Sala.findOrFail(params.id)
      const data = request.only(['nome', 'capacidade'])
      sala.merge(data)
      await sala.save()
      return sala
    } catch {
      return response.status(404).json('Sala não encontrada.')
    }
  }
}
