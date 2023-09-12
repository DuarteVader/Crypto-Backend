import { IAccountDocument } from "../modules/account/account.model";

interface ICreateAccountDTO {
    name: string;
    email: string;
    password: string;
}

interface IAccountService {
    store(data: ICreateAccountDTO): Promise<IAccountDocument | null>;
}

export { IAccountService, ICreateAccountDTO}