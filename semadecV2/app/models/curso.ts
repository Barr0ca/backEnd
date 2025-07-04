import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column, hasMany, scope } from '@adonisjs/lucid/orm'
import Atleta from './atleta.js'
import Equipe from './equipe.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Curso extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare ativo: boolean

  @hasMany(() => Equipe)
  declare equipes: HasMany<typeof Equipe>

  @hasMany(() => Atleta)
  declare atletas: HasMany<typeof Atleta>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeSave()
  static async nomeEmMinusculo(curso: Curso) {
    curso.nome = curso.nome.toLowerCase()
  }

  static visiveis = scope((query) => {
    query.where('ativo', '=', true)
  })
}
