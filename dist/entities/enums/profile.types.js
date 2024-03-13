"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileTypesSchema = exports.ProfileTypes = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
var ProfileTypes;
(function (ProfileTypes) {
    ProfileTypes["ADMIN"] = "ADMIN";
    ProfileTypes["PARENT"] = "PARENT";
})(ProfileTypes || (exports.ProfileTypes = ProfileTypes = {}));
exports.ProfileTypesSchema = new mongoose_1.default.Schema({
    status: {
        type: String,
        enum: [ProfileTypes.ADMIN, ProfileTypes.PARENT]
    }
});
