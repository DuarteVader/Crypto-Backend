import { hash } from 'bcrypt'
import {
  IAccountService,
  ICreateAccountDTO,
} from '../../interfaces/IAccountService'
import { Account, IAccountDocument } from './account.model'

class AccountService implements IAccountService {
  async store({
    name,
    email,
    password,
  }: ICreateAccountDTO): Promise<IAccountDocument> {
    try {



      const emailExists = await Account.findOne({ email })

      if (emailExists) {
        throw new Error('Email already exists')
      }

      const hashedPassword = await hash(password, 8)

      const account = await Account.create({
        name,
        email,
        password: hashedPassword
      })

      return account;
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export { AccountService }