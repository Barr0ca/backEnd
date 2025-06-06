import type { HttpContext } from '@adonisjs/core/http'
import Disponibilidade from '#models/disponibilidade'

export default class DisponibilidadesController {
  public async index({}: HttpContext) {
    return await Disponibilidade.query().preload('sala')
  }

  public async store({ request }: HttpContext) {   
    return await Disponibilidade.create(request.only(['dia_semana', 'horario_inicial', 'horario_final', 'sala_id']))
  }

  public async delete({ params }: HttpContext) {
    const disponibilidade = await Disponibilidade.findOrFail(params.id)
    await disponibilidade.delete()
    return { message: 'Disponibilidade deletada com sucesso' }
  }

  public async update({ params, request }: HttpContext) {
    const disponibilidade = await Disponibilidade.findOrFail(params.id)
    disponibilidade.merge(request.only(['dia_semana', 'horario_inicial', 'horario_final']))
    await disponibilidade.save()
    return disponibilidade
  }
}
