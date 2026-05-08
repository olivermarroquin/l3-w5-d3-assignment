import { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");

  function handleSubmit(e) {
    e.preventDefault();

    if (subject.trim() === "") {
      return;
    }

    onAddGoal(subject, difficulty);

    setSubject("");
    setDifficulty("Easy");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Example: Study React props"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
