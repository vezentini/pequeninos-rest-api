import { GenderTypes } from '../enums/gender.types';
export class StudentInput {
  readonly id?: number;
  readonly name?: string;
  readonly gender?: GenderTypes;
  readonly classid?: number;
}
