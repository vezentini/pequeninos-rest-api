import { ClassInput } from '../../entities/inputs';
import { Classes } from '../../entities/interfaces';
import { generateNumberId } from '../../helper';

const upsertClass = async (input: ClassInput): Promise<Boolean> => {
  let upsertObject = { ...input };
  if (input.id === 0) {
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
