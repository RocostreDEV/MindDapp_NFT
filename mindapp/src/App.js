import React, { useState } from 'react';
import './App.css';
import Questionnaire from './components/Questionnaire';
import Signup from './components/Signup';

function App() {const [submittedAnswers, setSubmittedAnswers] = useState(null);

  const handleQuestionnaireSubmit = (answers) => {
  setSubmittedAnswers(answers);
  };
  
  return (
  <div className="App">
  <Signup />
  <Questionnaire onSubmit={handleQuestionnaireSubmit} />
  {submittedAnswers && (
  <div>
  <h2>Submitted Answers</h2>
  <pre>{JSON.stringify(submittedAnswers, null, 2)}</pre>
  </div>
  )}
  </div>
  );
  }
  
  export default App;