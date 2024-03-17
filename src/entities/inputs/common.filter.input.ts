import { ProfileTypes } from "../enums";

export class CommonFilterInput {
  readonly accountId?: number;
  readonly profile?: ProfileTypes;
  readonly date?: string;
}
