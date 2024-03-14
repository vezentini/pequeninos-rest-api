import { AccountInput } from '../../entities/inputs';
import { Accounts } from '../../entities/interfaces';
import { ProfileTypes } from '../../entities/enums';
import { generateNumberId } from '../../helper';
import { is } from 'ramda';

const upsertAccount = async (input: AccountInput): Promise<Boolean> => {
  let upsertObject = { ...input, profile: ProfileTypes[input.profile as keyof typeof ProfileTypes] };

  if (!is(Number, upsertObject.id)) {
    upsertObject.id = generateNumberId();
    console.log('gerou');
  }

  await Accounts.updateOne(
    { id: upsertObject.id },
    upsertObject,
    { upsert: true },
  );

  return true;
}

export default upsertAccount;
