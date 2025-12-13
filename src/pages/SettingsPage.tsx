import React from "react";

export const SettingsPage: React.FC = () => {
  return (
    <main className="to-dashboard">
      <section className="to-section">
        <h1 className="to-h1">Settings</h1>
        <p className="to-muted">High-level preferences for how your workspace behaves.</p>
        <div className="to-settings-grid">
          <div className="to-card">
            <div className="to-card-label">Work hours</div>
            <div className="to-muted">09:00–18:00 · Local time</div>
          </div>
          <div className="to-card">
            <div className="to-card-label">Default currency</div>
            <div className="to-muted">Based on traveller profile</div>
          </div>
          <div className="to-card">
            <div className="to-card-label">Notifications</div>
            <div className="to-muted">Digest every morning at 08:00</div>
          </div>
        </div>
      </section>
    </main>
  );
};
