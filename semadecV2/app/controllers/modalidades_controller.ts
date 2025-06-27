import Modalidade from '#models/modalidade'
import type { HttpContext } from '@adonisjs/core/http'

export default class ModalidadesController {
  public async index({}: HttpContext) {
    return await Modalidade.all()
  }

  public async store({ request }: HttpContext) {
    return await Modalidade.create(request.only(['nome', 'ativo']))
  }

  public async update({ request, params }: HttpContext) {
    const modalidade = await Modalidade.findOrFail(params.id)
    modalidade.merge(request.only(['nome', 'ativo']))
    await modalidade.save()
    return modalidade
  }

  public async destroy({ params }: HttpContext) {
    const modalidade = await Modalidade.findOrFail(params.id)
    await modalidade.delete()
    return modalidade
  }

  public async show({ params }: HttpContext) {
    return await Modalidade.findOrFail(params.id)
  }
}
