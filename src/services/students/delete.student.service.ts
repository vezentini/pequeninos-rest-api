import { Students, IDeleteCommon } from '../../entities/interfaces';

const deleteStudent = async (id: number): Promise<IDeleteCommon> => {

  await Students.deleteOne({ id });

  return { success: true } as IDeleteCommon
}

export default deleteStudent;
