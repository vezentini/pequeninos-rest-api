import { StudentInput } from '../../entities/inputs';
import { Students } from '../../entities/interfaces';
import { generateNumberId } from '../../helper';
import { updateStudentAccounts } from '../accounts';
import { updateStudentSummaries } from '../summaries';

const upsertStudent = async (input: StudentInput): Promise<Boolean> => {
  let upsertObject = { ...input };
  let keyUpateAnothersDbs = '';

  const isNew = input.id === 0;

  if (isNew) {
    upsertObject.id = generateNumberId();
  } else {
    const studentDb = await Students.findOne({ id: input.id });
    keyUpateAnothersDbs = `${input.id} - ${studentDb?.name}`;
  }

  await Students.updateOne(
    { id: upsertObject.id },
    upsertObject,
    { upsert: true },
  );

  const newKeyUpateAnothersDbs = `${input.id} - ${input.name}`;

  if (!isNew && newKeyUpateAnothersDbs !== keyUpateAnothersDbs) {

    console.log('entrou');
    await updateStudentSummaries(keyUpateAnothersDbs, newKeyUpateAnothersDbs);
    await updateStudentAccounts(keyUpateAnothersDbs, newKeyUpateAnothersDbs)
  }

  return true;
}

export default upsertStudent;
