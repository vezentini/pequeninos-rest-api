import { Document, Schema, model } from 'mongoose';

export interface INotification {
  id: string;
  title: string;
  description: string;
  photo: string;
}

export default interface INotificationModal extends Document, INotification {
  id: string;
  title: string;
  description: string;
  photo: string;
}

const schema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Notifications = model<INotificationModal>('notifications', schema)
