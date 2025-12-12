import React from "react";

const tasks = [
  { title: "Confirm airport transfer with supplier", due: "Today", context: "Lisbon · Silva" },
  { title: "Send updated NYC hotel options", due: "Tomorrow", context: "New York · Martinez" },
  { title: "Chase deposit for Orlando trip", due: "This week", context: "Orlando · Smith family" }
];

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
          {tasks.map((task) => (
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
