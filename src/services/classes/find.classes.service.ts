import { Classes, IClassesList } from '../../entities/interfaces';
import IClassModal from '../../entities/interfaces/class.interface';

const findClasses = async (): Promise<IClassesList> => {
  const accountDb = await Classes.find();

  const classes = accountDb.map((account: IClassModal) => ({
    id: account.id,
    name: account.name,
  }))

  return { classes }
}

export default findClasses;
