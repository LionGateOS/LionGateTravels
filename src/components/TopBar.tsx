import React from "react";
import { useLocation } from "react-router-dom";
export const TopBar: React.FC = () => {
  const loc = useLocation();
  const titleMap: Record<string,string> = {
    "/":"Overview","/trips":"Trips","/quotes":"Quotes","/clients":"Clients","/tasks":"Tasks","/settings":"Settings"
  };
  return (
    <header className="to-topbar">
      <div className="to-topbar-title">{titleMap[loc.pathname] ?? "Travel workspace"}</div>
      <div className="to-topbar-right">
        <span className="to-pill to-pill-green">ONLINE</span>
      </div>
    </header>
  );
};
