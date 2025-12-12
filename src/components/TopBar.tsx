import React from "react";

export function TopBar() {
  return (
    <header className="to-topbar">
      <div className="to-topbar-title">Travel workspace</div>
      <div className="to-topbar-right">
        <span className="to-pill to-pill-green">ONLINE</span>
        <button className="to-primary-btn">New trip</button>
      </div>
    </header>
  );
}
