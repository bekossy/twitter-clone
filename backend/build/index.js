"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const tweetRoutes_1 = __importDefault(require("./routes/tweetRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*"
}));
app.use(express_1.default.json());
app.use("/api/auth", authRoutes_1.default);
app.use("/api/tweets", tweetRoutes_1.default);
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`server running on port:${process.env.PORT}`);
    });
})
    .catch((err) => console.log(err));
