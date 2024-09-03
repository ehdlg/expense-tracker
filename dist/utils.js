"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = exports.getId = exports.saveData = exports.getData = exports.checkDBExists = void 0;
const promises_1 = __importDefault(require("node:fs/promises"));
const constants_1 = require("./constants");
const checkDBExists = () => __awaiter(void 0, void 0, void 0, function* () {
    yield promises_1.default.mkdir(constants_1.DB_DIR_PATH, { recursive: true });
    try {
        yield promises_1.default.access(constants_1.DB_FILE_PATH);
    }
    catch (_error) {
        yield promises_1.default.writeFile(constants_1.DB_FILE_PATH, JSON.stringify([]), { flag: 'a+' });
    }
});
exports.checkDBExists = checkDBExists;
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.checkDBExists)();
    const rawData = yield promises_1.default.readFile(constants_1.DB_FILE_PATH, 'utf-8');
    const data = JSON.parse(rawData);
    return data;
});
exports.getData = getData;
const saveData = (newData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield promises_1.default.writeFile(constants_1.DB_FILE_PATH, JSON.stringify(newData), 'utf-8');
    }
    catch (error) {
        console.error('There was an error trying to save the new data', error);
    }
});
exports.saveData = saveData;
const getId = (data) => {
    if (data.length === 0)
        return 1;
    return data[data.length - 1].id + 1;
};
exports.getId = getId;
const formatDate = (date) => {
    const [formatedDate] = date.split('T');
    return formatedDate;
    return formatedDate;
};
exports.formatDate = formatDate;
