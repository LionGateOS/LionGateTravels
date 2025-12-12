import React, { useState } from "react";
import { store } from "../data/store";

export const TasksPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <main className="to-dashboard">
      <section className="to-section">
        <h1 className="to-h1">Tasks</h1>
        <p className="to-muted">
          A focused list of actions that keep trips, quotes and travellers moving.
        </p>
        <div className="to-table-card">
          <div className="to-table-header">
            <span>Task</span>
            <span>When</span>
            <span>Related to</span>
          </div>
          {store.tasks.map((task) => (
            <div
              key={task.id}
              className={
                "to-table-row to-table-row-clickable" +
                (task.id === selectedId ? " to-table-row-selected" : "")
              }
              onClick={() => setSelectedId(task.id)}
            >
              <span>{task.title}</span>
              <span>{task.due}</span>
              <span>{task.context}</span>
            </div>
          ))}
        </div>
        {selectedId && (
          <div className="to-selection-hint">
            Selected task ID: <span>{selectedId}</span>
          </div>
        )}
      </section>
    </main>
  );
};
