import { useState } from "react";

function GoalList({ goals, onDelete, onEdit, onUpdate }) {
  const [editSubject, setEditSubject] = useState("");
  const [editDifficulty, setEditDifficulty] = useState("Easy");

  if (goals.length === 0) {
    return <p className="empty-message">No study goals yet. Add one above.</p>;
  }

  return (
    <section>
      {goals.map((goal) => (
        <div className="card" key={goal.id}>
          {goal.editing ? (
            <>
              <input
                type="text"
                value={editSubject}
                onChange={(e) => setEditSubject(e.target.value)}
              />

              <select
                value={editDifficulty}
                onChange={(e) => setEditDifficulty(e.target.value)}
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>

              <button
                onClick={() => {
                  if (editSubject.trim() !== "") {
                    onUpdate(goal.id, editSubject, editDifficulty);
                  }
                }}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <p>
                <strong>Goal:</strong> {goal.subject}
              </p>

              <p>
                <strong>Difficulty:</strong> {goal.difficulty}
              </p>

              <button
                onClick={() => {
                  setEditSubject(goal.subject);
                  setEditDifficulty(goal.difficulty);
                  onEdit(goal.id);
                }}
              >
                Edit
              </button>
            </>
          )}

          <button onClick={() => onDelete(goal.id)}>Delete</button>
        </div>
      ))}
    </section>
  );
}

export default GoalList;
