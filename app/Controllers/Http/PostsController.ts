import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Post from 'App//Models/Post'
import { StoreValidator, UpdateValidator } from 'App/Validators/Post'

export default class PostsController {
  public async index ({}: HttpContextContract) {
    const posts = await Post.all()

    return posts

  }

  public async store ({ request, auth }: HttpContextContract) {
    const { categories } = request.all()
    const data = await request.validate(StoreValidator)
    const user = await auth.authenticate()

    const post = await Post.create({authorId: user.id, ...data})
    await post.related('categories').createMany([categories])

    await post.preload('author')
    await post.preload('categories')

    return post
  }

  public async show ({ params, response }: HttpContextContract) {
    // const post = await Database.rawQuery(`select * from posts where id = ${params.id}`)
    const post =  await Post.findOrFail(params.id)

    return post
  }

  public async update ({ params, request }: HttpContextContract) {
    const post =  await Post.findOrFail(params.id)
    const data =  await request.validate(UpdateValidator)
    // const data = request.only(['title', 'content'])

    post.merge(data)
    await post.save()
    await post.preload('author')

    return post

  }

  public async destroy ({params}: HttpContextContract) {
    const post =  await Post.findOrFail(params.id)
    await post.delete()
  }
}
