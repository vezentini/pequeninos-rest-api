import { AccountLoginInput } from '../entities/inputs';
import { Accounts, IAccountLogin } from '../entities/interfaces';

const loginAccount = async (filter: AccountLoginInput): Promise<IAccountLogin> => {
  const { email, password } = filter;
  if (!email || !password) return { success: false, account: null }

  const accountDb = await Accounts.findOne({ email, password });

  if (accountDb === null) return { success: false, account: null }
  return { success: true, account: accountDb };
}

export default loginAccount;
