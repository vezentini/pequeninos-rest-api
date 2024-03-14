import { StudentInput } from '../../entities/inputs';
import { Classes } from '../../entities/interfaces';
import { generateNumberId } from '../../helper';

const upsertClass = async (input: StudentInput): Promise<Boolean> => {
  let upsertObject = { ...input };
  if (input.id === null) {
    upsertObject.id = generateNumberId();
  }

  await Classes.updateOne(
    { id: upsertObject.id },
    upsertObject,
    { upsert: true },
  );

  return true;
}

export default upsertClass;
