"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
(0, node_fetch_1.default)('http://localhost:8080/test')
    .then((response) => {
    if (!response.ok) {
        throw new Error(`Error is ${response.status}`);
    }
    return response.json();
})
    .then((data) => console.log(`Data/Answer from server is:`, data))
    .catch((error) => console.error(`Error request:`, error.message));
