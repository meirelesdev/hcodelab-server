'use strict'

  const Contacts = use('App/Models/Contact')

class ContactController {
  
  async index () {

    return await Contacts.all()  

  }

  async store ({ request, response }) {
    
    const data = request.only(['name','email','message'])

    const contact = await Contacts.create(data)

    return contact

  }

  async show ({ params }) {

    const contact = await Contacts.findOrFail(params.id)

    return contact
  }

  async destroy ({ params }) {

    const contact = await Contacts.findOrFail(params.id)

    await contact.delete()
  }
}

module.exports = ContactController
