"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const classes_1 = require("../services/classes");
const classesRouter = express_1.default.Router();
classesRouter.use(express_1.default.json());
classesRouter.use(express_1.default.urlencoded({ extended: true }));
const storage = multer_1.default.memoryStorage();
const size = 150 * 1024 * 1024;
const upload = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: size,
        fieldSize: size,
    },
});
classesRouter.get('/find', upload.single('file'), async (req, res) => {
    const classesResult = await (0, classes_1.findClasses)();
    res.send(classesResult);
});
classesRouter.get('/findSelection', upload.single('file'), async (req, res) => {
    const studentsResult = await (0, classes_1.findSelectionClasses)();
    res.send(studentsResult);
});
classesRouter.post('/upsert', async (req, res) => {
    const upsertResult = await (0, classes_1.upsertClass)(req.body);
    res.send(upsertResult);
});
classesRouter.post('/delete', async (req, res) => {
    const deleteResult = await (0, classes_1.deleteClass)(req.body);
    res.send(deleteResult);
});
exports.default = classesRouter;
