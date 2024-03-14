"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const ramda_1 = require("ramda");
const accounts_1 = require("../services/accounts");
const accountsRouter = express_1.default.Router();
accountsRouter.use(express_1.default.json());
accountsRouter.use(express_1.default.urlencoded({ extended: true }));
const storage = multer_1.default.memoryStorage();
const size = 150 * 1024 * 1024;
const upload = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: size,
        fieldSize: size,
    },
});
accountsRouter.get('/login', upload.single('file'), async (req, res) => {
    const email = (0, ramda_1.pathOr)('', ['email'], req.query);
    const password = (0, ramda_1.pathOr)('', ['password'], req.query);
    const loginResult = await (0, accounts_1.loginAccount)({ email, password });
    res.send(loginResult);
});
accountsRouter.get('/find', upload.single('file'), async (req, res) => {
    const id = (0, ramda_1.pathOr)(null, ['id'], req.query);
    const loginResult = await (0, accounts_1.findAccounts)({ id });
    res.send(loginResult);
});
accountsRouter.post('/upsert', async (req, res) => {
    const upsertResult = await (0, accounts_1.upsertAccount)(req.body);
    res.send(upsertResult);
});
exports.default = accountsRouter;
