import Categoria from '#models/categoria'
import type { HttpContext } from '@adonisjs/core/http'
import { createPostValidator, updatePostValidator } from '#validators/categoria'

export default class ProdutosController {
  public async index({}: HttpContext) {
    return await Categoria.all()
  }

  public async store({ request }: HttpContext) {
    const dadosCategoria = request.all()
    await createPostValidator.validate(dadosCategoria)

    return await Categoria.create(request.only(['nome', 'descricao']))
  }

  public async show({ params, response }: HttpContext) {
    try {
      return await Categoria.findOrFail(params.id)
    } catch {
      return response.status(404).json('Categoria não encontrada.')
    }
  }

  public async update({ params, response, request }: HttpContext) {
    const dadosCategoria = request.all()
    try {
      await updatePostValidator.validate(dadosCategoria)
      const categoria = await Categoria.findOrFail(params.id)
      categoria.merge(request.only(['nome', 'descricao']))
      return await categoria.save()
    } catch {
      return response.status(404).json('Categoria não encontrada.')
    }
  }

  public async destroy({ params, response }: HttpContext) {
    try {
      const categoria = await Categoria.findOrFail(params.id)
      return await categoria.delete().then(() => categoria)
    } catch {
      return response.status(404).json('Categoria não encontrada.')
    }
  }
}
