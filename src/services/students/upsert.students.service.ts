import { StudentInput } from '../../entities/inputs';
import { Students } from '../../entities/interfaces';
import { generateNumberId } from '../../helper';

const upsertStudent = async (input: StudentInput): Promise<Boolean> => {
  let upsertObject = { ...input };
  if (input.id === null) {
    upsertObject.id = generateNumberId();
  }

  await Students.updateOne(
    { id: upsertObject.id },
    upsertObject,
    { upsert: true },
  );

  return true;
}

export default upsertStudent;
