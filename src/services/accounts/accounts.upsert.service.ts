import { v4 as uuid } from 'uuid';
import { AccountInput } from '../../entities/inputs';
import { Accounts } from '../../entities/interfaces';
import { ProfileTypes } from '../../entities/enums';

const upsertAccount = async (input: AccountInput): Promise<Boolean> => {
  console.log('chegou no lugar');

  let upsertObject = { ...input, profile: ProfileTypes[input.profile as keyof typeof ProfileTypes] };

  const profile = ProfileTypes[input.profile as keyof typeof ProfileTypes]

  if (input.id === '') {
    upsertObject.id = uuid();
  }

  console.log(profile);

  await Accounts.updateOne(
    { id: upsertObject.id },
    upsertObject,
    { upsert: true },
  );

  return true;
}

export default upsertAccount;
