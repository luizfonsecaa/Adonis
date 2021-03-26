import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App//Models/User'

export default class CreateUserSeeder extends BaseSeeder {
  // public static developmentOnly = true
  public async run () {
    await User.createMany([
      {
        email: 'luiz.f28@hotmail.com',
        password: '02223001',
        name: 'luiz',
        role: 'admin'
      },
      {
        email: 'normal@hotmail.com',
        name:'normal',
        password: '02223001'
      }
    ])
  }
}
