import { SummaryInput } from "../../entities/inputs/summary.input";
import { Summaries } from "../../entities/interfaces";
import { v4 as uuid } from 'uuid';


const upsertSummary = async (input: SummaryInput): Promise<Boolean> => {
  let upsertObject = { ...input };
  if (input.id === "") {
    upsertObject.id = uuid();
  }

  await Summaries.updateOne(
    { id: upsertObject.id },
    upsertObject,
    { upsert: true },
  );

  return true;
}

export default upsertSummary;
