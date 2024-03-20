import mongoose from "mongoose";

export enum ProfileTypes {
  ADMIN = 'ADMIN',
  PARENTAL = 'PARENT',
}

export const ProfileTypesSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: [ProfileTypes.ADMIN, ProfileTypes.PARENTAL]
  }
})
