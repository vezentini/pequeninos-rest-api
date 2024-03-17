"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const ramda_1 = require("ramda");
const enums_1 = require("../entities/enums");
const summaries_1 = require("../services/summaries");
const summariesRouter = express_1.default.Router();
summariesRouter.use(express_1.default.json());
summariesRouter.use(express_1.default.urlencoded({ extended: true }));
const storage = multer_1.default.memoryStorage();
const size = 150 * 1024 * 1024;
const upload = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: size,
        fieldSize: size,
    },
});
summariesRouter.get('/find', upload.single('file'), async (req, res) => {
    const accountId = (0, ramda_1.pathOr)(0, ['accountId'], req.query);
    const profile = (0, ramda_1.pathOr)(enums_1.ProfileTypes.ADMIN, ['profile'], req.query);
    const studentsResult = await (0, summaries_1.findSummaries)({ accountId, profile });
    res.send(studentsResult);
});
summariesRouter.post('/upsert', async (req, res) => {
    const upsertResult = await (0, summaries_1.upsertSummary)(req.body);
    res.send(upsertResult);
});
exports.default = summariesRouter;
