import { GenderTypes } from '../enums/gender.types';
export class StudentInput {
  readonly id?: string | null;
  readonly name?: string;
  readonly gender?: GenderTypes;
  readonly classId?: string;
}
