import { AccountsFilterInput } from '../../entities/inputs';
import { Accounts, IAccountsList } from '../../entities/interfaces';
import IAccountModal from '../../entities/interfaces/account.interface';
import { isEmpty } from 'ramda'

const findAccounts = async (input: Partial<AccountsFilterInput>): Promise<IAccountsList> => {
  let filter = isEmpty(input?.id) ? {} : { id: input.id }

  const accountDb = await Accounts.find(filter);

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
