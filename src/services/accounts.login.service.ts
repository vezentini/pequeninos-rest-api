import { AccountLoginInput } from '../entities/inputs';
import { Accounts, IAccountLogin } from '../entities/interfaces';

const loginAccount = async (filter: AccountLoginInput): Promise<IAccountLogin> => {
  const accountDb = await Accounts.findOne({ ...filter });

  if (accountDb === null) return { success: false, account: null }
  return { success: true, account: accountDb };
}

export default loginAccount;
