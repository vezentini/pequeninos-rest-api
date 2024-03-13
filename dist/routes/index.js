"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.classRouter = exports.accountsRouter = void 0;
const account_route_1 = __importDefault(require("./account.route"));
exports.accountsRouter = account_route_1.default;
const class_route_1 = __importDefault(require("./class.route"));
exports.classRouter = class_route_1.default;
