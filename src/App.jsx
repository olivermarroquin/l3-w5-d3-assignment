import { useState } from "react";
import "./App.css";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";

function App() {
  const [goals, setGoals] = useState([]);

  function addGoal(subject, difficulty) {
    const newGoal = {
      id: Date.now(),
      subject,
      difficulty,
      editing: false,
    };

    setGoals([...goals, newGoal]);
  }

  function deleteGoal(id) {
    setGoals(goals.filter((goal) => goal.id !== id));
  }

  function startEdit(id) {
    setGoals(
      goals.map((goal) =>
        goal.id === id
          ? { ...goal, editing: true }
          : { ...goal, editing: false },
      ),
    );
  }

  function updateGoal(id, updatedSubject, updatedDifficulty) {
    setGoals(
      goals.map((goal) =>
        goal.id === id
          ? {
              ...goal,
              subject: updatedSubject,
              difficulty: updatedDifficulty,
              editing: false,
            }
          : goal,
      ),
    );
  }

  return (
    <main className="app">
      <h1>Study Goal Tracker</h1>
      <p className="subtitle">
        Track what you want to study and how hard it is.
      </p>

      <GoalForm onAddGoal={addGoal} />

      <GoalList
        goals={goals}
        onDelete={deleteGoal}
        onEdit={startEdit}
        onUpdate={updateGoal}
      />
    </main>
  );
}

export default App;
