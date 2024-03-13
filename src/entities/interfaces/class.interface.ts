import { Document, Schema, model } from 'mongoose';


export interface IClass {
  id: string;
  name: string;
}

export default interface IClassModal extends Document, IClass {
  id: string;
  name: string;
}

const schema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Classes = model<IClassModal>('classes', schema)
