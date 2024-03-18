import { ProfileTypes } from "../enums";

export class CommonFindFilterInput {
  readonly accountId?: number;
  readonly profile?: ProfileTypes;
  readonly date?: string;
}
