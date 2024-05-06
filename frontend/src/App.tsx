import React from 'react';

import './App.css';
import AddExpression from './components/AddExpression';

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My English Learning App</h1>
      <AddExpression />
      {/* Other components or elements can go here */}
    </div>
  );
}

export default App;