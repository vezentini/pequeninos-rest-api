import { Classes, IDeleteCommon } from '../../entities/interfaces';

const deleteClass = async (id: number): Promise<IDeleteCommon> => {

  await Classes.deleteOne({ id });

  return { success: true } as IDeleteCommon
}

export default deleteClass;
