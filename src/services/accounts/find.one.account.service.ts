import { Accounts, IAccount } from '../../entities/interfaces';

const findOneAccount = async (id: number): Promise<IAccount> => {

  const accountDb = await Accounts.findOne({ id });

  return {
    id: accountDb?.id,
    name: accountDb?.name,
    email: accountDb?.email,
    phone: accountDb?.phone,
    document: accountDb?.document,
    studentIds: accountDb?.studentIds,
    profile: accountDb?.profile,
  } as IAccount;
}

export default findOneAccount;
