import type { HttpContext } from '@adonisjs/core/http'
import Atleta from '#models/atleta'

export default class AtletasController {
  public async index({ request }: HttpContext) {
    const consulta = Atleta.query()
    if (request.input('existeVinculoAtivo') != null) {
      consulta.withScopes((scope) => scope.vinculoEquipeAtivo())
    }
    return await consulta
  }

  public async store({ request }: HttpContext) {
    return await Atleta.create(request.only(['nome', 'cursoId', 'genero']))
  }

  public async update({ request, params }: HttpContext) {
    const atleta = await Atleta.findOrFail(params.id)
    atleta.merge(request.only(['nome', 'cursoId', 'genero']))
    await atleta.save()
    return atleta
  }

  public async destroy({ params }: HttpContext) {
    const atleta = await Atleta.findOrFail(params.id)
    await atleta.delete()
    return atleta
  }

  public async show({ params }: HttpContext) {
    return await Atleta.findOrFail(params.id)
  }
}
