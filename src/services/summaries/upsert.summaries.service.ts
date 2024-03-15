import { SummaryInput } from "../../entities/inputs/summary.input";
import { Summaries } from "../../entities/interfaces";
import { generateNumberId } from "../../helper";


const upsertSummary = async (input: SummaryInput): Promise<Boolean> => {
  let upsertObject = { ...input };
  if (input.id === 0) {
    upsertObject.id = generateNumberId();
  }

  await Summaries.updateOne(
    { id: upsertObject.id },
    upsertObject,
    { upsert: true },
  );

  return true;
}

export default upsertSummary;
