"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const accounts_login_service_1 = __importDefault(require("./services/accounts.login.service"));
const accounts_upsert_service_1 = __importDefault(require("./services/accounts.upsert.service"));
const connect_service_1 = require("./libs/database/connect.service");
const promises_1 = require("timers/promises");
const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Bem-vindo!');
});
(0, promises_1.setTimeout)(60000, async () => {
    await (0, connect_service_1.connect)();
});
app.get('/loginAccount', async (req, res) => {
    const loginResult = await (0, accounts_login_service_1.default)(req.params);
    res.send(loginResult);
});
app.post('/upsertAccount', async (req, res) => {
    const upsertResult = await (0, accounts_upsert_service_1.default)(req.body);
    res.send(upsertResult);
});
app.use((0, cors_1.default)({
    origin: '*'
}));
app.use((req, res) => {
    res.status(404);
});
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});
