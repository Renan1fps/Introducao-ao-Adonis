import Route from '@ioc:Adonis/Core/Route'
import './posts'
import './auth'

Route.get('/', 'PostsController.index')




