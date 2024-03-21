import { NotificationInput } from '../../entities/inputs';
import { Notifications } from '../../entities/interfaces';
import { v4 as uuid } from 'uuid';

const upsertNotification = async (input: NotificationInput): Promise<Boolean> => {
  let upsertObject = { ...input, id: uuid() };

  await Notifications.updateOne(
    { id: upsertObject.id },
    upsertObject,
    { upsert: true },
  );

  return true;
}

export default upsertNotification;
