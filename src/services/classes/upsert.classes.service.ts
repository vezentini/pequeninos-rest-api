import { ClassInput } from '../../entities/inputs';
import { Classes } from '../../entities/interfaces';
import { generateNumberId } from '../../helper';
import { updateClassStudents } from '../students';

const upsertClass = async (input: ClassInput): Promise<Boolean> => {
  let upsertObject = { ...input };
  const isNew = input.id === 0
  let keyUpateAnothersDbs = '';


  if (isNew) {
    upsertObject.id = generateNumberId();
  } else {
    const classDb = await Classes.findOne({ id: input.id });
    keyUpateAnothersDbs = `${input.id} - ${classDb?.name}`;
  }

  await Classes.updateOne(
    { id: upsertObject.id },
    upsertObject,
    { upsert: true },
  );

  if (!isNew) {
    await updateClassStudents(keyUpateAnothersDbs, `${input.id} - ${input?.name}`)
  }

  return true;
}

export default upsertClass;
