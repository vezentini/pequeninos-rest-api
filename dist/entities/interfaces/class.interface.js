"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classes = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.Classes = (0, mongoose_1.model)('classes', schema);
