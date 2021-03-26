import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'
import Post from 'App/Models/Post'

export default class CategoriesController {
  public async index ({}: HttpContextContract) {
    const posts = await Category.all()

    return posts
  }

  public async store ({ request }: HttpContextContract) {
    const { name } = request.all()

    const category = await Category.create({ name })

    return category
  }

  public async show ({ params, request }: HttpContextContract) {
    const category =  await Category.findOrFail(params.id)

    return category
  }

  public async update ({ params, request }: HttpContextContract) {
    const category = await Post.findOrFail(params.id)
    const { name } = request.all()
    category.merge(name)
    return category
  }

  public async destroy ({ params }: HttpContextContract) {
    const category = await Category.findOrFail(params.id)
    await category.delete()
  }
}
