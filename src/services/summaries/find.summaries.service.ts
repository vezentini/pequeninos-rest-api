import { ISummariesList, Summaries } from "../../entities/interfaces";
import { ISummary } from "../../entities/interfaces/summary.interface";


const findSummaries = async (): Promise<ISummariesList> => {
  const summariesDb = await Summaries.find();

  const summaries = summariesDb.map((summary: ISummary) => {
    return ({
      id: summary.id,
      date: summary.date,
      studentId: summary.studentId,
      mornningSnack: summary.mornningSnack,
      mornningSnackConsumn: summary.mornningSnackConsumn,
      luncheon: summary.luncheon,
      luncheonConsumn: summary.luncheonConsumn,
      afternoonSnack: summary.afternoonSnack,
      afternoonSnackConsumn: summary.afternoonSnackConsumn,
      preDinner: summary.preDinner,
      preDinnerConsumn: summary.preDinnerConsumn,
      description: summary.description,
    });
  })

  return { summaries }
}

export default findSummaries;
