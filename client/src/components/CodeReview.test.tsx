import React from 'react';
    import { render } from '../utils/test-utils';
    import CodeReview from './CodeReview';

    describe('CodeReview Component', () => {
      it('should render the CodeReview component with comments', () => {
        const comments = 'This is a test comment.';
        const { getByText } = render(<CodeReview comments={comments} />);
        expect(getByText('Code Review Comments')).toBeInTheDocument();
        expect(getByText(comments)).toBeInTheDocument();
      });

      it('should render the CodeReview component with no comments', () => {
        const { getByText } = render(<CodeReview comments="" />);
        expect(getByText('Code Review Comments')).toBeInTheDocument();
      });
    });
