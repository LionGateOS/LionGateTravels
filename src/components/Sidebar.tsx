import React from "react";
import { NavLink } from "react-router-dom";

const nav = [
  { to: "/", label: "Overview" },
  { to: "/trips", label: "Trips" },
  { to: "/quotes", label: "Quotes" },
  { to: "/clients", label: "Clients" },
  { to: "/tasks", label: "Tasks" },
  { to: "/settings", label: "Settings" }
];

export function Sidebar() {
  return (
    <aside className="to-sidebar">
      <div className="to-logo">TravelOrchestrator</div>
      <nav>
        {nav.map(i => (
          <NavLink
            key={i.to}
            to={i.to}
            end={i.to === "/"}
            className={({ isActive }) =>
              "to-nav-item" + (isActive ? " to-nav-item-active" : "")
            }
          >
            {i.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
