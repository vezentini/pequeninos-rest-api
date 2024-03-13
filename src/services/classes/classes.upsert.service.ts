import { v4 as uuid } from 'uuid';
import { ClassInput } from '../../entities/inputs';
import { Classes } from '../../entities/interfaces';

const upsertClass = async (input: ClassInput): Promise<Boolean> => {
  let upsertObject = { ...input };
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

export default upsertClass;
