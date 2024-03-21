"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const helper_1 = require("../../helper");
const accounts_1 = require("../accounts");
const summaries_1 = require("../summaries");
const upsertStudent = async (input) => {
    let upsertObject = Object.assign({}, input);
    let keyUpateAnothersDbs = '';
    const isNew = input.id === 0;
    if (isNew) {
        upsertObject.id = (0, helper_1.generateNumberId)();
    }
    else {
        const studentDb = await interfaces_1.Students.findOne({ id: input.id });
        keyUpateAnothersDbs = `${input.id} - ${studentDb === null || studentDb === void 0 ? void 0 : studentDb.name}`;
    }
    await interfaces_1.Students.updateOne({ id: upsertObject.id }, upsertObject, { upsert: true });
    const newKeyUpateAnothersDbs = `${input.id} - ${input.name}`;
    if (!isNew && newKeyUpateAnothersDbs !== keyUpateAnothersDbs) {
        await (0, summaries_1.updateStudentSummaries)(keyUpateAnothersDbs, newKeyUpateAnothersDbs);
        await (0, accounts_1.updateStudentAccounts)(keyUpateAnothersDbs, newKeyUpateAnothersDbs);
    }
    return true;
};
exports.default = upsertStudent;
