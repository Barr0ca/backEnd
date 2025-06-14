import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class EquipeAtleta extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare ativo: boolean

  @column()
  declare equipeId: number

  @column()
  declare atletaId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}