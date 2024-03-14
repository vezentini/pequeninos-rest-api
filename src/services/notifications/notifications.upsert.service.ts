import { v4 as uuid } from 'uuid';
import { NotificationInput } from '../../entities/inputs';
import { Notifications } from '../../entities/interfaces';

const upsertNotification = async (input: NotificationInput): Promise<Boolean> => {
  let upsertObject = { ...input };
  if (input.id === '') {
    upsertObject.id = uuid();
  }

  await Notifications.updateOne(
    { id: upsertObject.id },
    upsertObject,
    { upsert: true },
  );

  return true;
}

export default upsertNotification;
