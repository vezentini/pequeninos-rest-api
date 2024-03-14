import { IAccount } from "./account.interface";

export interface IAccountLogin {
  readonly success: boolean;
  readonly account: IAccount | null
}
