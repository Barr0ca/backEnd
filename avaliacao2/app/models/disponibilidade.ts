import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Sala from './sala.js'

export default class Disponibilidade extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare diaSemana: number

  @column()
  declare horarioInicial: string

  @column()
  declare horarioFinal: string

  @belongsTo(() => Sala)
  declare sala: BelongsTo<typeof Sala>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}