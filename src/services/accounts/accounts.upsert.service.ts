import { v4 as uuid } from 'uuid';
import { AccountInput } from '../../entities/inputs';
import { Classes } from '../../entities/interfaces';
import { ProfileTypes } from '../../entities/enums';

const upsertAccount = async (input: AccountInput): Promise<Boolean> => {
  let upsertObject = { ...input, profile: ProfileTypes[input.profile as keyof typeof ProfileTypes] };

  if (input.id === '') {
    upsertObject.id = uuid();
  }

  await Classes.updateOne(
    { id: upsertObject.id },
    upsertObject,
    { upsert: true },
  );

  return true;
}

export default upsertAccount;
