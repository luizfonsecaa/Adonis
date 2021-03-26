import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AuthValidator } from 'App/Validators/Auth'

export default class AuthController {
  public async store ({ request, auth }: HttpContextContract) {
    const data = await request.validate(AuthValidator)
    const {password, email} = data
    const token = await auth.attempt(email, password ,{
      expiresIn: '1 days'
    })
    return token
  }

  public async destroy ({ auth }: HttpContextContract) {
    await auth.logout()
  }
}
