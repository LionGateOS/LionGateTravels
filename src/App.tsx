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
import { loadState, saveState, undo as undoFn } from "./data/store";

export default function App(){
  const [state, setState] = React.useState(loadState());
  React.useEffect(()=> saveState(state), [state]);

  const undo = ()=>{
    const prev = undoFn();
    if(prev){ setState(prev); saveState(prev); }
  };

  return (
    <div className="to-shell">
      <Sidebar />
      <div className="to-main">
        <TopBar onUndo={undo} />
        <Routes>
          <Route path="/" element={<Dashboard state={state} />} />
          <Route path="/trips" element={<TripsPage state={state} setState={setState} />} />
          <Route path="/quotes" element={<QuotesPage state={state} setState={setState} />} />
          <Route path="/clients" element={<ClientsPage state={state} setState={setState} />} />
          <Route path="/tasks" element={<TasksPage state={state} setState={setState} />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </div>
  );
}
