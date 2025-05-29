import Equipe from '#models/equipe'
import type { HttpContext } from '@adonisjs/core/http'

export default class EquipesController {
    public async index({}: HttpContext) {
        return await Equipe.all()
    }

    public async create({ request }: HttpContext) {
        return await Equipe.create({
            equipe: request.input('curso', 'nome')
        })
    }

}