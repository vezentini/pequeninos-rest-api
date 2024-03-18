import { AccountInput } from '../../entities/inputs';
import { Accounts } from '../../entities/interfaces';
import { ProfileTypes } from '../../entities/enums';
import { generateNumberId } from '../../helper';

const upsertAccount = async (input: AccountInput): Promise<Boolean> => {
  const accountDb = await Accounts.findOne({ id: input.id });

  let upsertObject = { ...input, profile: ProfileTypes[input.profile as keyof typeof ProfileTypes] };

  if (accountDb === null) {
    upsertObject.id = generateNumberId();
    upsertObject.password = input.document;
  } else {
    upsertObject.password = accountDb.password;
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