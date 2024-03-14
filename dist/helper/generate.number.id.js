"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNumberId = void 0;
/* eslint-disable @typescript-eslint/no-var-requires */
const uuid_1 = require("uuid");
const uuidParse = require('uuid').parse;
const getUnsignedInt32Ranged = () => {
    const id = (0, uuid_1.v4)();
    const parsedUuid = uuidParse(id);
    const buffer = Buffer.from(parsedUuid);
    return buffer.readUInt32BE(0);
};
const generateNumberId = () => {
    let newId = 0;
    do {
        newId = getUnsignedInt32Ranged();
    } while (newId > 21474);
    return newId;
};
exports.generateNumberId = generateNumberId;
exports.default = exports.generateNumberId;
