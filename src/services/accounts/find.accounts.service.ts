import { AccountsFilterInput } from '../../entities/inputs';
import { Accounts, IAccount } from '../../entities/interfaces';
import IAccountModal from '../../entities/interfaces/account.interface';
import { isEmpty } from 'ramda'

const findAccounts = async (input: Partial<AccountsFilterInput>): Promise<IAccount[]> => {
  let filter = isEmpty(input?.id) ? {} : { id: input.id }

  const accountDb = await Accounts.find(filter);

  return accountDb.map((account: IAccountModal) => ({
    id: account.id,
    name: account.name,
    email: account.email,
    phone: account.phone,
    document: account.document,
    studentIds: account.studentIds,
    profile: account.profile,
  }))
}

export default findAccounts;
