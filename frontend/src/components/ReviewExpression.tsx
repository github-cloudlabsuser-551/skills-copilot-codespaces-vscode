import React, { useState } from 'react';

interface ReviewExpressionProps {
  polishExpression: string;
  correctEnglishTranslation: string;
}

const ReviewExpression: React.FC<ReviewExpressionProps> = ({ polishExpression, correctEnglishTranslation }) => {
  const [userTranslation, setUserTranslation] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserTranslation(event.target.value);
  };

  const checkTranslation = () => {
    if (userTranslation.toLowerCase() === correctEnglishTranslation.toLowerCase()) {
      alert('Correct!');
    } else {
      alert('Incorrect, try again.');
    }
  };

  return (
    <div>
      <p>{polishExpression}</p>
      <input type="text" value={userTranslation} onChange={handleInputChange} />
      <button onClick={checkTranslation}>Check</button>
    </div>
  );
};

export default ReviewExpression;