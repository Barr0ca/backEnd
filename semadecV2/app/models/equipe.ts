import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import Curso from './curso.js'
import Modalidade from './modalidade.js'
import Atleta from './atleta.js'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'

export enum EquipeGenero {
  MASCULINO = 'MASCULINO',
  FEMININO = 'FEMININO',
  MISTO = 'MISTO',
}

export default class Equipe extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare validado: boolean

  @column()
  declare genero: EquipeGenero

  @column()
  declare cursoId: number

  @column()
  declare modalidadeId: number

  @belongsTo(() => Curso)
  declare curso: BelongsTo<typeof Curso>

  @belongsTo(() => Modalidade)
  declare modalidade: BelongsTo<typeof Modalidade>

  @manyToMany(() => Atleta)
  declare atletas: ManyToMany<typeof Atleta>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
