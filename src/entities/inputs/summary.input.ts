import { SnackConsumnTypes } from '../enums';

export class SummaryInput {
  readonly id?: number;
  readonly date?: string;
  readonly studentid?: number;
  readonly mornningSnack?: string;
  readonly mornningSnackConsumn?: SnackConsumnTypes;
  readonly luncheon?: string;
  readonly luncheonConsumn?: SnackConsumnTypes;
  readonly afternoonSnack?: string;
  readonly afternoonSnackConsumn?: SnackConsumnTypes;
  readonly preDinner?: string;
  readonly preDinnerConsumn?: SnackConsumnTypes;
  readonly description?: string;
}
