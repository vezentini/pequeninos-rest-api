import { CommonDeleteFilterInput } from '../../entities/inputs';
import { Students } from '../../entities/interfaces';

const deleteStudent = async (input: CommonDeleteFilterInput): Promise<Boolean> => {
  await Students.deleteOne(
    { id: input.id }
  );

  return true;
}

export default deleteStudent;
