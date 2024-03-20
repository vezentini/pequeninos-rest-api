import { Accounts, IDeleteCommon } from '../../entities/interfaces';

const deleteAccount = async (id: number): Promise<IDeleteCommon> => {

  await Accounts.deleteOne({ id });

  return { success: true } as IDeleteCommon
}

export default deleteAccount;
