import { Request, Response } from 'express'
import { Account } from './account.model'
import { IAccountService } from '../../interfaces/IAccountService'
import { AccountService } from './account.service'

class AccountController {
  private accountService: IAccountService

  constructor() {
    this.accountService = new AccountService()
  }

  async store(req: Request, res: Response): Promise<Response> {
    const data = req.body

    const account = await this.accountService.store(data)

    return res
      .status(201)
      .json({ message: 'Account created successfully', account })
  }
}

export { AccountController }
