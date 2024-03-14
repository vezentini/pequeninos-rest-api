"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const notifications_1 = require("../services/notifications");
const studentRouter = express_1.default.Router();
studentRouter.use(express_1.default.json());
studentRouter.use(express_1.default.urlencoded({ extended: true }));
const storage = multer_1.default.memoryStorage();
const size = 150 * 1024 * 1024;
const upload = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: size,
        fieldSize: size,
    },
});
studentRouter.get('/find', upload.single('file'), async (req, res) => {
    const loginResult = await (0, notifications_1.findNotifications)();
    res.send(loginResult);
});
studentRouter.post('/upsert', async (req, res) => {
    const upsertResult = await (0, notifications_1.upsertNotification)(req.body);
    res.send(upsertResult);
});
exports.default = studentRouter;
