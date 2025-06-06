import Reserva from '#models/reserva'
import type { HttpContext } from '@adonisjs/core/http'

export default class ReservasController {
  public async listar({}: HttpContext) {
    return await Reserva.all()
  }

  public async cadastrar({ request }: HttpContext) {
    return await Reserva.create(request.only(['nome', 'quantidade']))
  }

  public async alterar({ params, response, request }: HttpContext) {
    try {
      const reserva = await Reserva.findOrFail(params.id)
      reserva.merge(request.only(['nome', 'quantidade']))
      return await reserva.save()
    } catch {
      return response.status(404).json('Reserva não encontrada.')
    }
  }

  public async remover({params, response}:HttpContext){
    try {
        const reserva = await Reserva.findOrFail(params.id)
        return await reserva.delete().then(() => reserva)
    } catch {
        return response.status(404).json('Reserva não encontrada.')
    }
  }
}
