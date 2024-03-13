"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentFilterInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const enums_1 = require("../enums");
let StudentFilterInput = class StudentFilterInput {
};
exports.StudentFilterInput = StudentFilterInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, { nullable: true }),
    __metadata("design:type", String)
], StudentFilterInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], StudentFilterInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.GenderTypes, { nullable: true }),
    __metadata("design:type", String)
], StudentFilterInput.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, { nullable: true }),
    __metadata("design:type", String)
], StudentFilterInput.prototype, "classId", void 0);
exports.StudentFilterInput = StudentFilterInput = __decorate([
    (0, graphql_1.InputType)()
], StudentFilterInput);
