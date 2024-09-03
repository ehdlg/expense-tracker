"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Month = exports.DEFAULT_YEAR = exports.DB_FILE_PATH = exports.DB_DIR_PATH = void 0;
const node_path_1 = __importDefault(require("node:path"));
exports.DB_DIR_PATH = node_path_1.default.resolve(__dirname, '../db');
exports.DB_FILE_PATH = node_path_1.default.resolve(exports.DB_DIR_PATH, 'data.json');
exports.DEFAULT_YEAR = new Date().getFullYear();
var Month;
(function (Month) {
    Month[Month["January"] = 1] = "January";
    Month[Month["February"] = 2] = "February";
    Month[Month["March"] = 3] = "March";
    Month[Month["April"] = 4] = "April";
    Month[Month["May"] = 5] = "May";
    Month[Month["June"] = 6] = "June";
    Month[Month["July"] = 7] = "July";
    Month[Month["August"] = 8] = "August";
    Month[Month["September"] = 9] = "September";
    Month[Month["October"] = 10] = "October";
    Month[Month["November"] = 11] = "November";
    Month[Month["December"] = 12] = "December";
})(Month || (exports.Month = Month = {}));
