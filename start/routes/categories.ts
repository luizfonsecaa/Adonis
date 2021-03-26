import Route from '@ioc:Adonis/Core/Route'


Route.resource('/categories', 'CategoriesController')
  .apiOnly()
  .middleware({
    store: ['acl:admin'],
    update: ['acl:admin'],
    destroy: ['acl:admin'],
  })
