"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const test_utils_1 = require("../utils/test-utils");
const CodeEditor_1 = __importDefault(require("./CodeEditor"));
describe('CodeEditor Component', () => {
    it('should render the CodeEditor component', () => {
        const { getByPlaceholderText } = (0, test_utils_1.render)(react_1.default.createElement(CodeEditor_1.default, { code: "", onCodeChange: () => { } }));
        expect(getByPlaceholderText('Enter code here...')).toBeInTheDocument();
    });
    it('should update the code when the textarea value changes', () => {
        const onCodeChange = jest.fn();
        const { getByPlaceholderText } = (0, test_utils_1.render)(react_1.default.createElement(CodeEditor_1.default, { code: "", onCodeChange: onCodeChange }));
        const textarea = getByPlaceholderText('Enter code here...');
        test_utils_1.fireEvent.change(textarea, { target: { value: 'test code' } });
        expect(onCodeChange).toHaveBeenCalledWith('test code');
    });
});
//# sourceMappingURL=CodeEditor.test.js.map