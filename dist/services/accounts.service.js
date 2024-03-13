"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsService = void 0;
const mongoose_1 = require("mongoose");
class AccountsService {
    async login(filter) {
        let modal = new mongoose_1.Model();
        const result = await modal.findOne(filter)
            .exec();
        const success = (result === null || result === void 0 ? void 0 : result.id) !== null && (result === null || result === void 0 ? void 0 : result.id) !== "" ? true : false;
        return { success, account: result };
    }
}
exports.AccountsService = AccountsService;
