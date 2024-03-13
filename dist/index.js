"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = require("./routes");
const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';
const URI = "mongodb+srv://pequeninos-app:q8qDSmnSRxKkRWhl@cluster0.hhhy8qo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/accounts', routes_1.accountsRouter);
app.use('/classes', routes_1.classRouter);
app.get('/', (req, res) => {
    res.send('Bem-vindo!');
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
