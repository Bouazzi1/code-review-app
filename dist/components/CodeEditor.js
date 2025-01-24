"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CodeEditor = ({ code, onCodeChange }) => {
    return (react_1.default.createElement("textarea", { value: code, onChange: (e) => onCodeChange(e.target.value), placeholder: "Enter code here..." }));
};
exports.default = CodeEditor;
//# sourceMappingURL=CodeEditor.js.map