import { Accounts, IAccountsList } from '../../entities/interfaces';
import IAccountModal from '../../entities/interfaces/account.interface';

const findAccounts = async (): Promise<IAccountsList> => {

  const accountDb = await Accounts.find();

  const accounts = accountDb.map((account: IAccountModal) => ({
    id: account.id,
    name: account.name,
    email: account.email,
    phone: account.phone,
    document: account.document,
    studentIds: account.studentIds,
    profile: account.profile,
  }))

  return { accounts }
}

export default findAccounts;
