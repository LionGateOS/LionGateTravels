import React from "react";
export const SettingsPage: React.FC = () => (
  <main className="to-dashboard">
    <section className="to-section">
      <h1 className="to-h1">Settings</h1>
      <p className="to-muted">High-level preferences.</p>
      <div className="to-settings-grid">
        <div className="to-card"><div className="to-card-label">Work hours</div><div className="to-muted">09:00–18:00</div></div>
        <div className="to-card"><div className="to-card-label">Currency</div><div className="to-muted">Auto</div></div>
        <div className="to-card"><div className="to-card-label">Notifications</div><div className="to-muted">Daily</div></div>
      </div>
    </section>
  </main>
);
