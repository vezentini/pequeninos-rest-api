import { CommonFilterInput } from "../../entities/inputs"
import { Accounts, IAccount } from "../../entities/interfaces";

export const mapFilterStudents = async (filter: CommonFilterInput) => {
  const accountsDb = await Accounts.findOne({ id: filter.accountId }) as IAccount;

  const listStudents = accountsDb.studentIds.map((student: string) => student.split('-')[0].trim())

  return listStudents
}

export default mapFilterStudents;
