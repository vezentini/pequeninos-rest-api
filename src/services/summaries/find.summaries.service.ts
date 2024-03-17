import { ProfileTypes } from "../../entities/enums";
import { CommonFilterInput } from "../../entities/inputs";
import { ISummariesList, Summaries } from "../../entities/interfaces";
import { ISummary } from "../../entities/interfaces/summary.interface";
import { mapFilterStudents } from "../accounts";


const findSummaries = async (input: CommonFilterInput): Promise<ISummariesList> => {
  let filter = {};
  if (input.profile === ProfileTypes.PARENT) {
    filter = await mapFilterStudents(input)
  }

  const summariesDb = await Summaries.find({ ...filter });

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
