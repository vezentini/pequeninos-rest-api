import { isEmpty } from "ramda";
import { CommonFilterInput } from "../../entities/inputs"
import { Accounts, IAccount } from "../../entities/interfaces";

export const mapFilterStudents = async (filter: CommonFilterInput, mapId: boolean = false) => {
  const accountsDb = await Accounts.findOne({ id: filter.accountId }) as IAccount;

  if (isEmpty(accountsDb.studentIds)) return [];

  return mapId === true ? accountsDb.studentIds.map((student: string) => Number(student.split('-')[0].trim())) :
    accountsDb.studentIds;
}

export default mapFilterStudents;
