import React from 'react';

    interface CodeEditorProps {
      code: string;
      onCodeChange: (code: string) => void;
    }

    const CodeEditor: React.FC<CodeEditorProps> = ({ code, onCodeChange }) => {
      return (
        <textarea
          value={code}
          onChange={(e) => onCodeChange(e.target.value)}
          placeholder="Enter code here..."
        />
      );
    };

    export default CodeEditor;
