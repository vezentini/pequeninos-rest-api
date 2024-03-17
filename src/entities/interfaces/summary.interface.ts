import { Document, Schema, model } from 'mongoose';
import { ProfileTypes, SnackConsumnTypes } from '../enums';


export interface ISummary {
  id: string;
  date: string;
  studentId: string;
  mornningSnack: string;
  mornningSnackConsumn: SnackConsumnTypes,
  luncheon: string;
  luncheonConsumn: SnackConsumnTypes,
  afternoonSnack: string;
  afternoonSnackConsumn: SnackConsumnTypes,
  preDinner: string;
  preDinnerConsumn: SnackConsumnTypes,
  description: string;
}

export default interface ISummaryModal extends Document, ISummary {
  id: string;
  date: string;
  studentId: string;
  mornningSnack: string;
  mornningSnackConsumn: SnackConsumnTypes,
  luncheon: string;
  luncheonConsumn: SnackConsumnTypes,
  afternoonSnack: string;
  afternoonSnackConsumn: SnackConsumnTypes,
  preDinner: string;
  preDinnerConsumn: SnackConsumnTypes,
  description: string;
}

const schema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    studentId: {
      type: String,
      required: true,
    },
    mornningSnack: {
      type: String,
      required: true,
    },
    mornningSnackConsumn: {
      type: String,
      required: true,
    },
    luncheon: {
      type: String,
      required: true,
    },
    luncheonConsumn: {
      type: String,
      required: true,
    },
    afternoonSnack: {
      type: String,
      required: true,
    },
    afternoonSnackConsumn: {
      type: String,
      required: true,
    },
    preDinner: {
      type: String,
      required: true,
    },
    preDinnerConsumn: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Summaries = model<ISummaryModal>('summaries', schema)
