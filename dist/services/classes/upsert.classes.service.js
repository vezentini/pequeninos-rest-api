"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const helper_1 = require("../../helper");
const students_1 = require("../students");
const upsertClass = async (input) => {
    let upsertObject = Object.assign({}, input);
    const isNew = input.id === 0;
    let keyUpateAnothersDbs = '';
    if (isNew) {
        upsertObject.id = (0, helper_1.generateNumberId)();
    }
    else {
        const classDb = await interfaces_1.Classes.findOne({ id: input.id });
        keyUpateAnothersDbs = `${input.id} - ${classDb === null || classDb === void 0 ? void 0 : classDb.name}`;
    }
    await interfaces_1.Classes.updateOne({ id: upsertObject.id }, upsertObject, { upsert: true });
    if (!isNew) {
        await (0, students_1.updateClassStudents)(keyUpateAnothersDbs, `${input.id} - ${input === null || input === void 0 ? void 0 : input.name}`);
    }
    return true;
};
exports.default = upsertClass;
