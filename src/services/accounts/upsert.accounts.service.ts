import { AccountInput } from '../../entities/inputs';
import { Accounts } from '../../entities/interfaces';
import { ProfileTypes } from '../../entities/enums';
import { generateNumberId } from '../../helper';
import { isEmpty } from 'ramda';

const upsertAccount = async (input: AccountInput,): Promise<Boolean> => {
  const accountDb = await Accounts.findOne({ id: input.id });

  let upsertObject = { ...input };

  if (accountDb === null) {
    upsertObject.id = generateNumberId();
    upsertObject.password = input.document;
    upsertObject.profile = ProfileTypes[input.profile as keyof typeof ProfileTypes]
  } else {
    upsertObject.password = isEmpty(input.password) ? accountDb.password : input.password;
    upsertObject.profile = accountDb.profile;
  }

  await Accounts.updateOne(
    { id: upsertObject.id },
    upsertObject,
    { upsert: true },
  );

  return true;
}

export default upsertAccount;
