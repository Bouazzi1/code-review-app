"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const react_1 = __importStar(require("react"));
const CodeEditor_1 = __importDefault(require("./components/CodeEditor"));
const CodeReview_1 = __importDefault(require("./components/CodeReview"));
const api_1 = require("./services/api");
function App() {
    const [code, setCode] = (0, react_1.useState)('');
    const [comments, setComments] = (0, react_1.useState)('');
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)(''); // Specify the type for error
    const handleReview = () => __awaiter(this, void 0, void 0, function* () {
        setLoading(true);
        setError('');
        try {
            const response = yield (0, api_1.reviewCode)(code);
            setComments(response.comments);
        }
        catch (err) {
            setError(err.message); // Cast err as Error
        }
        finally {
            setLoading(false);
        }
    });
    return (react_1.default.createElement("div", { className: "app" },
        react_1.default.createElement("h1", null, "Code Review Assistant"),
        react_1.default.createElement(CodeEditor_1.default, { code: code, onCodeChange: setCode }),
        react_1.default.createElement("button", { onClick: handleReview, disabled: loading }, loading ? 'Reviewing...' : 'Review Code'),
        error && react_1.default.createElement("p", { style: { color: 'red' } }, error),
        react_1.default.createElement(CodeReview_1.default, { comments: comments })));
}
exports.default = App;
//# sourceMappingURL=App.js.map