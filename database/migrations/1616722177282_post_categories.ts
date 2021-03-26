import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PostCategories extends BaseSchema {
  protected tableName = 'post_categories'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table
      .integer('post_id')
      .unsigned()
      .references('id')
      .inTable('posts')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

      table
      .integer('category_id')
      .unsigned()
      .references('id')
      .inTable('categories')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
