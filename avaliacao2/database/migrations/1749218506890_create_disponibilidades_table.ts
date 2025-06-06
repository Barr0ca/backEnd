import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'disponibilidades'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('sala_id')
        .unsigned()
        .references('id')
        .inTable('salas')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.integer('dia_semana')
      table.time('horario_inicial')
      table.time('horario_final')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
