import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { load, save } from "./data/store";
import { Shell } from "./components/Shell";

import Trips from "./pages/Trips";
import Quotes from "./pages/Quotes";
import Clients from "./pages/Clients";
import Tasks from "./pages/Tasks";

export default function App() {
  const [state, setState] = React.useState(load());
  React.useEffect(() => save(state), [state]);

  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Navigate to="/trips" replace />} />
        <Route path="/trips" element={<Trips state={state} setState={setState} />} />
        <Route path="/quotes" element={<Quotes state={state} setState={setState} />} />
        <Route path="/clients" element={<Clients state={state} setState={setState} />} />
        <Route path="/tasks" element={<Tasks state={state} setState={setState} />} />
        <Route path="*" element={<Navigate to="/trips" replace />} />
      </Routes>
    </Shell>
  );
}
