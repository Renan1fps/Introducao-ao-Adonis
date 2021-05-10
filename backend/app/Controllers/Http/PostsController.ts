import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
//import Database from '@ioc:Adonis/Lucid/Database'

export default class PostsController {
  public async index({}: HttpContextContract) {
    const posts = await Post.all()

    return posts
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['title', 'content'])
    const post = await Post.create(data)
    return post
  }

  public async show({ params /*response*/ }: HttpContextContract) {
    /*caso queira fazer uma busca com sql nativo
    const post= await Database.rawQuery(`select*from posts where id =${params.id}`)*/
    //const post = await Post.find(params.id) //find só busca por id
    // const post = await Post.findBy('title', title) busca mais profunda
    /*forma mais casual
     if (!post) {
       return response.notFound({ erro: { message: 'not found' } })
     }
     return post*/
     const post= await Post.findOrFail(params.id)//ele busca e se não acha já retorna o erro
     return post
  }

  public async update({request,params}: HttpContextContract) {
    const post= await Post.findOrFail(params.id)
    const data = request.only(['title', 'content'])
    post.merge(data)//merge=mesclar
    await post.save()
    return post
  }

  public async destroy({params}: HttpContextContract) {
    const post= await Post.findOrFail(params.id)
    post.delete()
  }
}
