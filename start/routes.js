'use strict'


const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/admin/users', 'UserController.index')
Route.get('/admin/users/:id', 'UserController.show')
Route.post('/users', 'UserController.store')
// Route.delete('/admin/users/:id', 'UserController.destroy').middleware('auth')
Route.post('/auths', 'AuthController.store')


//JWT - Json Web Token

// Route.group(()=>{
//   Route.resource('users', 'UserController').apiOnly()
// }).prefix('admin').middleware(['auth'])

Route.get('/admin/contacts', 'ContactController.index')
Route.post('/admin/contacts/add', 'ContactController.store')
Route.get('/admin/contacts/:id', 'ContactController.show')
Route.delete('/admin/contacts/:id', 'ContactController.destroy')

