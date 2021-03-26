import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class AuthValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    email: schema.string({trim: true}, [ rules.email() ]),
    password: schema.string({trim: true})
  })

  public messages = {}
}
