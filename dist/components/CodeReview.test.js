"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const test_utils_1 = require("../utils/test-utils");
const CodeReview_1 = __importDefault(require("./CodeReview"));
describe('CodeReview Component', () => {
    it('should render the CodeReview component with comments', () => {
        const comments = 'This is a test comment.';
        const { getByText } = (0, test_utils_1.render)(react_1.default.createElement(CodeReview_1.default, { comments: comments }));
        expect(getByText('Code Review Comments')).toBeInTheDocument();
        expect(getByText(comments)).toBeInTheDocument();
    });
    it('should render the CodeReview component with no comments', () => {
        const { getByText } = (0, test_utils_1.render)(react_1.default.createElement(CodeReview_1.default, { comments: "" }));
        expect(getByText('Code Review Comments')).toBeInTheDocument();
    });
});
//# sourceMappingURL=CodeReview.test.js.map