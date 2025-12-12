import React from "react";

export const SettingsPage: React.FC = () => {
  return (
    <main className="to-dashboard">
      <section className="to-section">
        <h1 className="to-h1">Settings</h1>
        <p className="to-muted">
          High-level preferences for how your workspace behaves.
        </p>
        <div className="to-settings-grid">
          <div className="to-card">
            <div className="to-card-label">Work hours</div>
            <div className="to-muted">9:00–18:00</div>
          </div>
          <div className="to-card">
            <div className="to-card-label">Preferred currency</div>
            <div className="to-muted">Local traveller currency</div>
          </div>
          <div className="to-card">
            <div className="to-card-label">Notifications</div>
            <div className="to-muted">Daily digest: 08:00</div>
          </div>
        </div>
      </section>
    </main>
  );
};
