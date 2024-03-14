import { Document, Schema, model } from 'mongoose';
import { GenderTypes } from '../enums';


export interface IStudent {
  id: string;
  name: string;
  classId: string;
  gender: GenderTypes;
}

export default interface IStudentModal extends Document, IStudent {
  id: string;
  name: string;
  classId: string;
  gender: GenderTypes;
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
    classId: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Students = model<IStudentModal>('students', schema)
