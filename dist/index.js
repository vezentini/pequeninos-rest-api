"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const accounts_login_service_1 = __importDefault(require("./services/accounts.login.service"));
const accounts_upsert_service_1 = __importDefault(require("./services/accounts.upsert.service"));
const mongoose_1 = __importDefault(require("mongoose"));
const multer_1 = __importDefault(require("multer"));
const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';
const URI = "mongodb+srv://pequeninos-app:q8qDSmnSRxKkRWhl@cluster0.hhhy8qo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Bem-vindo!');
});
const storage = multer_1.default.memoryStorage();
const size = 150 * 1024 * 1024;
const upload = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: size,
        fieldSize: size,
    },
});
app.get('/loginAccount', upload.single('file'), async (req, res) => {
    const loginResult = await (0, accounts_login_service_1.default)(req.body);
    res.send(loginResult);
});
app.post('/upsertAccount', async (req, res) => {
    const upsertResult = await (0, accounts_upsert_service_1.default)(req.body);
    res.send(upsertResult);
});
app.use((0, cors_1.default)({
    origin: '*'
}));
mongoose_1.default.connect(URI).catch(() => {
    console.log('Failed to connect into mongo by URI');
});
app.use((req, res) => {
    res.status(404);
});
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});
