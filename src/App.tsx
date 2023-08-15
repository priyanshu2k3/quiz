import React from 'react';
import './App.css';
import Test from "./components/test"
import QuestionCard from './components/questionCard';

function App() {

  const verifyAnswer=()=>{}
  
  const nextQuestion=()=>{}

  const startQuiz=async()=>{}

  return (
    <div className="App">
      
      <div>
        <button onClick={startQuiz}>Start Quiz</button>
      </div>

      <div>
        <h1>Score</h1>
        {/* <QuestionCard props={question,questionNo,option}/> */}
      </div>

    <button>Next Question</button>
    </div>
  );
}

export default App;
