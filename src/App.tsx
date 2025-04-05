import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RecoveryDashboard  from './components/RecoveryDashboard/RecoveryDashboard';
import ExerciseList from './components/ExerciseList/ExerciseList';
import ExerciseSelection from './components/ExerciseSelection/ExerciseSelection';
import ExercisePage from './components/ExercisePage/ExercisePage';
import ExerciseComplete from './components/ExerciseComplete/ExerciseComplete';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RecoveryDashboard />} />
          <Route path="/exercise-list" element={<ExerciseList />} />
          <Route path="/exercise-details/:exerciseId" element={<ExerciseSelection />} />
          <Route path="/exercise" element={<ExercisePage />} />
          <Route path="/exercise-complete" element={<ExerciseComplete stepsClimbed={200} timeTaken={"08:45"} averageSpeed={"29 steps/minute"} isPersonalBest={true} />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;