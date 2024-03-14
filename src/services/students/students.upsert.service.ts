import { v4 as uuid } from 'uuid';
import { StudentInput } from '../../entities/inputs';
import { Students } from '../../entities/interfaces';

const upsertStudent = async (input: StudentInput): Promise<Boolean> => {
  let upsertObject = { ...input };
  if (input.id === '') {
    upsertObject.id = uuid();
  }

  await Students.updateOne(
    { id: upsertObject.id },
    upsertObject,
    { upsert: true },
  );

  return true;
}

export default upsertStudent;
