import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class FirstUserSeeder extends BaseSeeder {
  //public static developmentOnly = true caso queira que essa seed só rode em desenvolvimento
  public async run() {
    // Write your database queries inside the run method
    await User.create({
      email: 'renan@gmail.com',
      password: '20030927'
    })
  }
}
