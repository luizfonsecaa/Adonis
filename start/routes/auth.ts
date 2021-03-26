import Route from '@ioc:Adonis/Core/Route'

Route.post('/auth','AuthController.store')
Route.delete('/auth','AuthController.destroy').middleware('auth')


// Route.group(() => {
//   Route.post('/','AuthController.store')
//   Route.delete('/','AuthController.destroy')
// }).prefix('/auth')
