import Equipe from '#models/equipe'
import type { HttpContext } from '@adonisjs/core/http'

export default class EquipesController {
  public async index({}: HttpContext) {
    return await Equipe.all()
  }

  public async create({ request }: HttpContext) {
    return await Equipe.create(request.only(['curso', 'nome']))
  }

  public async update({ params, request, response }: HttpContext) {
    try {
        const equipe = await Equipe.findOrFail(params.id)
        equipe.merge(request.only(['curso', 'nome']))
        return await equipe.save()
    } catch {
        return await response.json('Equipe não encontrada.')
    }

  }

  public async delete({ params, response }: HttpContext) {
    try {
        const equipe = await Equipe.findOrFail(params.id)
        return await equipe.delete().then(() => equipe)
    } catch {
        return await response.json('Equipe não encontrada.')
    }
  }
}
