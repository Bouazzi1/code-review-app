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
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewCode = void 0;
const API_URL = 'http://localhost:5000/api';
const reviewCode = (code) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${API_URL}/review`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
    });
    if (!response.ok) {
        const errorBody = yield response.text();
        throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
    }
    return yield response.json();
});
exports.reviewCode = reviewCode;
//# sourceMappingURL=api.js.map