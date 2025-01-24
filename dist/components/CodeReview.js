"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CodeReview = ({ comments }) => {
    return (react_1.default.createElement("div", { className: "code-review" },
        react_1.default.createElement("h2", null, "Code Review Comments"),
        react_1.default.createElement("pre", null, comments)));
};
exports.default = CodeReview;
//# sourceMappingURL=CodeReview.js.map