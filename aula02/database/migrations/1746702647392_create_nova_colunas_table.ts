import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'minha_tabelas'

  async up() {
    this.schema.alterTable('minha_tabelas', (table) => {
      table.integer('idade')
    })
  }

  async down() {
    this.schema.alterTable('minha_tabelas', (table) => {
      table.dropColumn('idade')
    })
  }
}
