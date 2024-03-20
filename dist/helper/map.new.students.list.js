"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapNewStudentsListIds = void 0;
const mapNewStudentsListIds = (studentIds, oldId, newId) => {
    return studentIds.map((id) => oldId === id ? newId : id);
};
exports.mapNewStudentsListIds = mapNewStudentsListIds;
exports.default = exports.mapNewStudentsListIds;
