import { Accounts, IAccount } from "../../entities/interfaces";
import { mapNewStudentsListIds } from "../../helper";


const updateStudentAccounts = async (oldAccountId: string, newAccountId: string): Promise<void> => {
  const accountsDb = (await Accounts.find({ studentIds: oldAccountId })) as IAccount[];

  if (accountsDb.length === 0) return;

  for (let i = 0; i < accountsDb.length; i++) {
    const studentIds = mapNewStudentsListIds(accountsDb[i].studentIds, oldAccountId, newAccountId);
    await Accounts.updateOne({ id: accountsDb[i]?.id }, { $set: { studentIds } });
  }

  return;
}

export default updateStudentAccounts;
