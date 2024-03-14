import { Document, Schema, model } from 'mongoose';


export interface IClass {
  id: number;
  name: string;
}

export default interface IClassModal extends Document, IClass {
  id: number;
  name: string;
}

const schema = new Schema(
  {
    id: {
      type: Number,
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
