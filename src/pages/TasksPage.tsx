import React, { useMemo, useState } from "react";
import { store } from "../data/store";
import { DetailDrawer } from "../components/DetailDrawer";

export const TasksPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = useMemo(() => {
    if (!selectedId) return null;
    return store.tasks.find((t) => t.id === selectedId) ?? null;
  }, [selectedId]);

  return (
    <main className="to-dashboard">
      <section className="to-section">
        <h1 className="to-h1">Tasks</h1>
        <p className="to-muted">A focused list of actions that keep trips, quotes and travellers moving.</p>

        <div className="to-table-card">
          <div className="to-table-header to-table-header-3">
            <span>Task</span>
            <span>When</span>
            <span>Related to</span>
          </div>

          {store.tasks.map((task) => (
            <div
              key={task.id}
              className={
                "to-table-row to-table-row-3 to-table-row-clickable" +
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

        <DetailDrawer
          isOpen={Boolean(selected)}
          title={selected ? selected.title : "Task details"}
          subtitle={selected ? `${selected.due} · ${selected.context}` : undefined}
          onClose={() => setSelectedId(null)}
        >
          {selected ? (
            <div className="to-drawer-grid">
              <div className="to-kv">
                <div className="to-k">Due</div>
                <div className="to-v">{selected.due}</div>
              </div>
              <div className="to-kv">
                <div className="to-k">Context</div>
                <div className="to-v">{selected.context}</div>
              </div>
              <div className="to-kv to-kv-wide">
                <div className="to-k">Notes</div>
                <div className="to-v">{selected.notes ?? "—"}</div>
              </div>

              <div className="to-drawer-actions">
                <button className="to-ghost-btn" onClick={() => alert("Next: mark as done")}>Mark done</button>
                <button className="to-primary-btn" onClick={() => alert("Next: assign task")}>Assign</button>
              </div>
            </div>
          ) : null}
        </DetailDrawer>
      </section>
    </main>
  );
};
