import { AccountLoginInput } from '../entities/inputs';
import { Accounts, IAccountLogin } from '../entities/interfaces';

const loginAccount = async (filter: Partial<AccountLoginInput>): Promise<IAccountLogin> => {
  const accountDb = await Accounts.findOne(filter).exec();

  const success = accountDb?.id !== null && accountDb?.id !== "" ? true : false;

  return { success, account: accountDb };
}

export default loginAccount;
