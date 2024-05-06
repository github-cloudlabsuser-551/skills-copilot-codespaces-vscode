import React from 'react';
import ReviewExpression from './ReviewExpression';

interface Expression {
  polish: string;
  english: string;
}

interface ExpressionListProps {
  expressions: Expression[];
}

const ExpressionList: React.FC<ExpressionListProps> = ({ expressions }) => {
  return (
    <div>
      {expressions.map((expression, index) => (
        <ReviewExpression
          key={index}
          polishExpression={expression.polish}
          correctEnglishTranslation={expression.english}
        />
      ))}
    </div>
  );
};

export default ExpressionList;