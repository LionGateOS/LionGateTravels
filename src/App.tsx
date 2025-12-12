import React from "react";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { Dashboard } from "./pages/Dashboard";
import { TripsPage } from "./pages/TripsPage";
import { QuotesPage } from "./pages/QuotesPage";
import { ClientsPage } from "./pages/ClientsPage";
import { TasksPage } from "./pages/TasksPage";
import { SettingsPage } from "./pages/SettingsPage";

const App: React.FC = () => {
  return (
    <div className="to-shell">
      <Sidebar />
      <div className="to-main">
        <TopBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/trips" element={<TripsPage />} />
          <Route path="/quotes" element={<QuotesPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
