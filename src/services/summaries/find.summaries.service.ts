import { isEmpty } from "ramda";
import { ProfileTypes } from "../../entities/enums";
import { CommonFilterInput } from "../../entities/inputs";
import { ISummariesList, Summaries } from "../../entities/interfaces";
import { ISummary } from "../../entities/interfaces/summary.interface";
import { mapFilterStudents } from "../accounts";


const findSummaries = async (input: CommonFilterInput): Promise<ISummariesList> => {
  let filter = {};

  if (input.profile === ProfileTypes.PARENTAL) {
    const listStudentsIds = await mapFilterStudents(input)

    if (isEmpty(listStudentsIds)) return { summaries: [] }

    filter = { studentId: { $in: listStudentsIds } }
  }

  const summariesDb = await Summaries.find({ ...filter, date: input.date });

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
