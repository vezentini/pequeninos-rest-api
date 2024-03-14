"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const findClasses = async () => {
    const classesDb = await interfaces_1.Classes.find();
    const classes = classesDb.map((account) => (`${account.id} - ${account.name}`));
    return { classes };
};
exports.default = findClasses;
