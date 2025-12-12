import React from "react";
import type { SectionKey } from "../App";

const navItems: { key: SectionKey; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "trips", label: "Trips" },
  { key: "quotes", label: "Quotes" },
  { key: "clients", label: "Clients" },
  { key: "tasks", label: "Tasks" },
  { key: "settings", label: "Settings" }
];

interface SidebarProps {
  activeSection: SectionKey;
  onChange: (section: SectionKey) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onChange }) => {
  return (
    <aside className="to-sidebar">
      <div className="to-logo">TravelOrchestrator</div>
      <nav>
        {navItems.map((item) => (
          <button
            key={item.key}
            className={
              "to-nav-item" + (item.key === activeSection ? " to-nav-item-active" : "")
            }
            onClick={() => onChange(item.key)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};
