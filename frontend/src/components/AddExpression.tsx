import React, { useState, FormEvent, ChangeEvent } from 'react';

const AddExpression: React.FC = () => {
  const [polish, setPolish] = useState<string>('');
  const [english, setEnglish] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(`Polish: ${polish}, English: ${english}`);

    fetch('http://localhost:5000/addExpression', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        polishExpression: polish,
        englishTranslation: english,
      }),
    })
      .then((response) => response.text())
      .then((message) => {
        console.log(message);
        setPolish('');
        setEnglish('');
      })
      .catch((error) => console.error('Error:', error));
  };


  const handlePolishChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPolish(event.target.value);
  };

  const handleEnglishChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEnglish(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Polish:
        <input type="text" value={polish} onChange={handlePolishChange} required />
      </label>
      <label>
        English:
        <input type="text" value={english} onChange={handleEnglishChange} required />
      </label>
      <button type="submit">Add Expression</button>
    </form>
  );
}

export default AddExpression;