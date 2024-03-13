import { ProfileTypes } from '../enums';

export class AccountType {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  document?: string;
  studentIds?: string[];
  profile?: ProfileTypes;
}
