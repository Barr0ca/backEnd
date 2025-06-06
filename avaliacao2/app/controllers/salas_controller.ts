import type { HttpContext } from '@adonisjs/core/http'
import Sala from '#models/sala'

export default class SalasController {
  public async index({}: HttpContext) {
    return await Sala.all()
  }

  public async store({ request }: HttpContext) {
    return await Sala.create(request.only(['nome', 'capacidade']))
  }

  public async delete({ params }: HttpContext) {
    const sala = await Sala.findOrFail(params.id)
    await sala.delete()
    return { message: 'Sala deletada com sucesso' }
  }

  public async update({ params, request }: HttpContext) {
    const sala = await Sala.findOrFail(params.id)
    const data = request.only(['nome', 'capacidade'])
    sala.merge(data)
    await sala.save()
    return sala
  }
}
