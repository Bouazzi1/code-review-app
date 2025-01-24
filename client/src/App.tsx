import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import CodeReview from './components/CodeReview';
import { reviewCode } from './services/api';

function App() {
  const [code, setCode] = useState(`function add(a, b) {
    return a + b;
  }`); // Set initial code snippet
  const [comments, setComments] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>(''); // Specify the type for error

  const handleReview = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await reviewCode(code);
      setComments(response.comments);
    } catch (err) {
      setError((err as Error).message); // Cast err as Error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Code Review Assistant</h1>
      <CodeEditor code={code} onCodeChange={setCode} />
      <button onClick={handleReview} disabled={loading}>
        {loading ? 'Reviewing...' : 'Review Code'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <CodeReview comments={comments} />
    </div>
  );
}

export default App;