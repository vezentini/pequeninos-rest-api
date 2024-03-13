import mongoose, { Document, Schema, model } from 'mongoose';
import { ProfileTypes } from '../enums';


export interface IAccount {
  id: string;
  name: string;
  email: string;
  phone: string;
  document: string;
  studentIds: string[];
  profile: ProfileTypes;
}

export default interface IAccountModal extends Document, IAccount {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  document: string;
  studentIds: string[];
  profile: ProfileTypes;
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
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    document: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      maxlength: 500,
      private: true
    },
    studentIds: {
      type: [String],
      required: true,
    },
    profile: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Accounts = model<IAccountModal>('accounts', schema)
