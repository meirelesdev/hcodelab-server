'use strict'

//Carregando os dados do usuario vindo do MySql
// Utilizando o model user
const User = use('App/Models/User')

class UserController {

    async store({ request }){
        const data = request.only(['name','email','photo','birth_at','level','password'])

        const user = await User.create(data)

        return user
    }

    async index () {
        return await User.all()
    }

    async show({ params }) {
        
        const user = await User.findOrFail(params.id)

        return user
    }

    async destroy({ params, auth, response }){
        
        const user = await User.findOrFail(params.id)

        if(user.id !== auth.user.id){
            return response.status(401).send({ error: 'Not authorized'})
        }

        await user.delete()
    }
}



module.exports = UserController
