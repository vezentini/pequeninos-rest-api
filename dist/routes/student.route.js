"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const students_1 = require("../services/students");
const studentsRouter = express_1.default.Router();
studentsRouter.use(express_1.default.json());
studentsRouter.use(express_1.default.urlencoded({ extended: true }));
const storage = multer_1.default.memoryStorage();
const size = 150 * 1024 * 1024;
const upload = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: size,
        fieldSize: size,
    },
});
studentsRouter.get('/find', upload.single('file'), async (req, res) => {
    const studentsResult = await (0, students_1.findStudents)();
    res.send(studentsResult);
});
studentsRouter.get('/findSelection', upload.single('file'), async (req, res) => {
    const studentsResult = await (0, students_1.findSelectionStudentes)();
    res.send(studentsResult);
});
studentsRouter.post('/upsert', async (req, res) => {
    const upsertResult = await (0, students_1.upsertStudent)(req.body);
    res.send(upsertResult);
});
exports.default = studentsRouter;
