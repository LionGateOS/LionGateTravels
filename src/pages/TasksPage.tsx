import React from "react";
import { store } from "../data/store";

export const TasksPage: React.FC = () => {
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
            <div key={task.title} className="to-table-row">
              <span>{task.title}</span>
              <span>{task.due}</span>
              <span>{task.context}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
