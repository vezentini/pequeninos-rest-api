"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationsRouter = exports.studentsRouter = exports.classesRouter = exports.accountsRouter = void 0;
const accounts_route_1 = __importDefault(require("./accounts.route"));
exports.accountsRouter = accounts_route_1.default;
const classes_route_1 = __importDefault(require("./classes.route"));
exports.classesRouter = classes_route_1.default;
const students_route_1 = __importDefault(require("./students.route"));
exports.studentsRouter = students_route_1.default;
const notifications_route_1 = __importDefault(require("./notifications.route"));
exports.notificationsRouter = notifications_route_1.default;
