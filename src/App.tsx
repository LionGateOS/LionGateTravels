import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { Dashboard } from "./pages/Dashboard";
import { TripsPage } from "./pages/TripsPage";
import { QuotesPage } from "./pages/QuotesPage";
import { ClientsPage } from "./pages/ClientsPage";
import { TasksPage } from "./pages/TasksPage";
import { SettingsPage } from "./pages/SettingsPage";

export type SectionKey = "overview" | "trips" | "quotes" | "clients" | "tasks" | "settings";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>("overview");

  const renderSection = () => {
    switch (activeSection) {
      case "trips":
        return <TripsPage />;
      case "quotes":
        return <QuotesPage />;
      case "clients":
        return <ClientsPage />;
      case "tasks":
        return <TasksPage />;
      case "settings":
        return <SettingsPage />;
      case "overview":
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="to-shell">
      <Sidebar activeSection={activeSection} onChange={setActiveSection} />
      <div className="to-main">
        <TopBar />
        {renderSection()}
      </div>
    </div>
  );
};

export default App;
