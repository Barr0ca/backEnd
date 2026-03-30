import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Sala from './sala.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Horario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare salaId: number

  @column()
  declare semana: number

  @column()
  declare inicio: string

  @column()
  declare final: string

  @belongsTo(() => Sala)
  declare sala: BelongsTo<typeof Sala>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}