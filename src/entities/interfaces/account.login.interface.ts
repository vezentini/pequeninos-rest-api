import { AccountType } from '../dtos';

export interface IAccountLogin {
  readonly success: boolean;
  readonly account: AccountType | null
}
