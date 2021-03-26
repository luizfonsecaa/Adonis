import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  belongsTo,
  BelongsTo,
  manyToMany,
  ManyToMany,
  beforeSave
} from '@ioc:Adonis/Lucid/Orm'

import User from 'App/Models/User'
import Category from './Category'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title:string

  @column()
  public content:string

  @column()
  public slug:string

  @column()
  public authorId:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, { foreignKey: 'authorId' })
  public author: BelongsTo<typeof User>

  @manyToMany(()=> Category, {
    localKey: 'id',
    pivotForeignKey: 'post_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'category_id',
    pivotTable: 'post_categories',
  })
  public categories: ManyToMany<typeof Category>

  @beforeSave()
  public static async hashPassword (post: Post) {
    post.slug = post.title.replace(/ /g,"_")
  }
}
