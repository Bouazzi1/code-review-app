import React from 'react';
    import { render, fireEvent } from '../utils/test-utils';
    import CodeEditor from './CodeEditor';

    describe('CodeEditor Component', () => {
      it('should render the CodeEditor component', () => {
        const { getByPlaceholderText } = render(<CodeEditor code="" onCodeChange={() => {}} />);
        expect(getByPlaceholderText('Enter code here...')).toBeInTheDocument();
      });

      it('should update the code when the textarea value changes', () => {
        const onCodeChange = jest.fn();
        const { getByPlaceholderText } = render(<CodeEditor code="" onCodeChange={onCodeChange} />);
        const textarea = getByPlaceholderText('Enter code here...');
        fireEvent.change(textarea, { target: { value: 'test code' } });
        expect(onCodeChange).toHaveBeenCalledWith('test code');
      });
    });
