import { ProfileTypes } from '../enums';

export class AccountInputDto {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  document?: string;
  studentIds?: string[];
  profile?: ProfileTypes;
}
