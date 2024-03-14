"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSelectionStudentes = exports.upsertStudent = exports.findStudents = void 0;
const find_students_service_1 = __importDefault(require("./find.students.service"));
exports.findStudents = find_students_service_1.default;
const upsert_students_service_1 = __importDefault(require("./upsert.students.service"));
exports.upsertStudent = upsert_students_service_1.default;
const find_selection_students_service_1 = __importDefault(require("./find.selection.students.service"));
exports.findSelectionStudentes = find_selection_students_service_1.default;