import { Model } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { AccountInput, AccountLoginInput } from '../entities/inputs';
import { IAccount, IAccountLogin } from '../entities/interfaces';

export class AccountsService {

  async login(filter: Partial<AccountLoginInput>): Promise<IAccountLogin> {
    let modal = new Model<IAccount>();
    const result = await
      modal.findOne(filter)
        .exec();

    const success = result?.id !== null && result?.id !== "" ? true : false;

    return { success, account: result };
  }

  // async upsert(upsertAccountDto: AccountInput): Promise<IAccount> {
  //   const upsertObject = { ...upsertAccountDto };
  //   if (upsertAccountDto.id === '') {
  //     upsertObject.id = uuid();
  //   }

  //   const createdAccount = new this.accountModel(upsertObject);
  //   await this.accountModel.findOneAndUpdate(
  //     { id: upsertObject.id },
  //     { ...upsertObject },
  //     { upsert: true },
  //   );
  //   return createdAccount;
  // }

  // async findAll(filter: Partial<AccountFilterInput>): Promise<IAccount[]> {
  //   return this.accountModel.find(filter).exec();
  // }

  // async findOne(filter: Partial<AccountFilterInput>): Promise<IAccount | null> {
  //   return this.accountModel.findOne(filter).exec();
  // }
}
