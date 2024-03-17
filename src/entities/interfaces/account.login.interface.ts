import { IAccountLoginResult } from "./account.interface";

export interface IAccountLogin {
  readonly success: boolean;
  readonly account: IAccountLoginResult | null
}
