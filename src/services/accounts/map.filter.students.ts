import { isEmpty } from "ramda";
import { CommonFindFilterInput } from "../../entities/inputs"
import { Accounts, IAccount } from "../../entities/interfaces";

export const mapFilterStudents = async (filter: CommonFindFilterInput, mapId: boolean = false) => {
  const accountsDb = await Accounts.findOne({ id: filter.accountId }) as IAccount;

  if (isEmpty(accountsDb.studentIds)) return [];

  return mapId === true ? accountsDb.studentIds.map((student: string) => Number(student.split('-')[0].trim())) :
    accountsDb.studentIds;
}

export default mapFilterStudents;
