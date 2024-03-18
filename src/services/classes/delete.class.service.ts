import { CommonDeleteFilterInput } from '../../entities/inputs';
import { Classes } from '../../entities/interfaces';

const deleteClass = async (input: CommonDeleteFilterInput): Promise<Boolean> => {
  await Classes.deleteOne(
    { id: input.id }
  );

  return true;
}

export default deleteClass;
