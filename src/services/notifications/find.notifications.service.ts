import { CommonFindFilterInput } from "../../entities/inputs";
import { INotificationsList, Notifications } from "../../entities/interfaces";
import INotificationModal from "../../entities/interfaces/notification.interface";


const findNotifications = async (): Promise<INotificationsList> => {
  const notificationsDb = await Notifications.find();

  const notifications = notificationsDb.map((notification: INotificationModal) => {
    return ({
      id: notification.id,
      title: notification.title,
      description: notification.description,
      photo: notification.photo
    });
  })

  return { notifications }
}

export default findNotifications;
