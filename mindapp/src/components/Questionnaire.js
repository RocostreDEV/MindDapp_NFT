import React, { useState } from 'react';

const Questionnaire = ({ onSubmit }) => {
  const [questions] = useState([
    { id: 1, question: 'Do you prefer working alone or in a team?' },
    { id: 2, question: 'Do you enjoy taking risks?' },
    { id: 3, question: 'Are you more of a morning or a night person?' },
    { id: 4, question: 'Do you prefer a structured or flexible work environment?' },
    { id: 5, question: 'Do you enjoy solving complex problems?' },
    { id: 6, question: 'Are you more analytical or creative?' },
    { id: 7, question: 'Do you prefer routine tasks or variety in your work?' },
    { id: 8, question: 'Are you more introverted or extroverted?' },
    { id: 9, question: 'Do you prefer working on multiple projects simultaneously or focusing on one project at a time?' },
    { id: 10, question: 'Do you thrive under pressure or prefer a low-stress work environment?' },
    { id: 11, question: 'Do you prefer to lead or follow in a group setting?' },
    { id: 12, question: 'Are you more detail-oriented or big-picture focused?' },
    { id: 13, question: 'Do you prefer working with data and numbers or words and ideas?' },
    { id: 14, question: 'Do you enjoy learning new things or mastering existing skills?' },
    { id: 15, question: 'Do you prefer working with people or technology?' },
  ]);

  const [answers, setAnswers] = useState({});

  const handleChange = (e, questionId) => {
    setAnswers({ ...answers, [questionId]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <div>
      <h1>Questionnaire</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <div key={question.id}>
            <label htmlFor={`answer-${question.id}`}>{question.question}</label>
            <input
              type="text"
              id={`answer-${question.id}`}
              onChange={(e) => handleChange(e, question.id)}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Questionnaire;