/* eslint-disable @typescript-eslint/no-var-requires */
import { v4 as uuid } from 'uuid';

const uuidParse = require('uuid').parse;

const getUnsignedInt32Ranged = () => {
  const id = uuid();
  const parsedUuid = uuidParse(id);
  const buffer = Buffer.from(parsedUuid);

  return buffer.readUInt32BE(0);
};

export const generateNumberId = () => {
  let newId = 0;

  do {
    newId = getUnsignedInt32Ranged();
  } while (newId > 21474);

  return newId;
};

export default generateNumberId;
