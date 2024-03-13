import { ProfileTypes } from '../enums';

export class AccountInput {
  readonly id?: string | null;
  readonly name?: string;
  readonly email?: string;
  readonly password?: string;
  readonly phone?: string;
  readonly document?: string;
  readonly studentIds?: string[];
  readonly profile?: ProfileTypes;
}
