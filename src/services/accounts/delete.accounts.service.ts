import { CommonDeleteFilterInput } from '../../entities/inputs';
import { Accounts } from '../../entities/interfaces';

const upsertAccount = async (input: CommonDeleteFilterInput): Promise<Boolean> => {
  await Accounts.deleteOne(
    { id: input.id }
  );

  return true;
}

export default upsertAccount;
