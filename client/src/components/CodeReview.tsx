import React from 'react';

    interface CodeReviewProps {
      comments: string;
    }

    const CodeReview: React.FC<CodeReviewProps> = ({ comments }) => {
      return (
        <div className="code-review">
          <h2>Code Review Comments</h2>
          <pre>{comments}</pre>
        </div>
      );
    };

    export default CodeReview;
