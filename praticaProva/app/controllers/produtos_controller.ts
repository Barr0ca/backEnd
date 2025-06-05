import Produto from '#models/produto'
import type { HttpContext } from '@adonisjs/core/http'
import { createPostValidator, updatePostValidator } from '#validators/produto'

export default class ProdutosController {
  public async index({}: HttpContext) {
    return await Produto.query().preload('categoria')
  }

  public async store({ request }: HttpContext) {
    const dadosProduto = request.all()
    await createPostValidator.validate(dadosProduto)

    return await Produto.create(request.only(['nome', 'descricao', 'preco', 'quantidade', 'categoria_id']))
  }

  public async show({ params, response }: HttpContext) {
    try {
      return await Produto.query().preload('categoria').where(params.id)

    } catch {
      return response.status(404).json('Produto não encontrado.')
    }
  }
  public async update({ params, response, request }: HttpContext) {
    const dadosProduto = request.all()
    try {
    await updatePostValidator.validate(dadosProduto) 
    const produto = await Produto.findOrFail(params.id)
    produto.merge(request.only(['nome', 'descricao', 'preco', 'quantidade', 'categoria_id']))
    return await produto.save() 
    } catch {
        return response.status(404).json('Produto não encontrado.')
    }
  }
  public async destroy({params, response}:HttpContext){
    try {
        const produto = await Produto.findOrFail(params.id)
        return await produto.delete().then(() => produto)
    } catch {
        return response.status(404).json('Produto não encontrado.')
    }
  }
}
