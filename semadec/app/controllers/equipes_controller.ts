import Equipe from '#models/equipe'
import type { HttpContext } from '@adonisjs/core/http'

export default class EquipesController {
  public async index({}: HttpContext) {
    return await Equipe.query().preload('atletas')
  }

  public async indexById({ response, params }: HttpContext) {
    const equipe = await Equipe.query().preload('atletas').where('id', params.id)
    if (equipe.length === 0) {
      return await response.status(404).json('Equipe não encontrada.')
    }

    return await equipe
  }

  public async create({ request }: HttpContext) {
    const { curso, nome, atletas } = await request.only(['curso', 'nome', 'atletas'])

    const equipe = await Equipe.create({curso, nome})
    if (atletas && atletas.length > 0) {
      await equipe.related('atletas').createMany(atletas)
    }

    return await equipe.id
  }

  public async update({ params, request, response }: HttpContext) {
    try {
      const equipe = await Equipe.findOrFail(params.id)
      equipe.merge(request.only(['curso', 'nome']))
      return await equipe.save()
    } catch {
      return await response.status(404).json('Equipe não encontrada.')
    }
  }

  public async delete({ params, response }: HttpContext) {
    try {
      const equipe = await Equipe.findOrFail(params.id)
      return await equipe.delete().then(() => equipe)
    } catch {
      return await response.status(404).json('Equipe não encontrada.')
    }
  }
}
