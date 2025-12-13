import React from "react";

type Props = {
  isOpen: boolean;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  onClose: () => void;
};

export const DetailDrawer: React.FC<Props> = ({ isOpen, title, subtitle, children, onClose }) => {
  return (
    <>
      <div
        className={"to-drawer-overlay" + (isOpen ? " to-drawer-overlay-open" : "")}
        onClick={onClose}
        aria-hidden={!isOpen}
      />
      <aside className={"to-drawer" + (isOpen ? " to-drawer-open" : "")} aria-hidden={!isOpen}>
        <div className="to-drawer-header">
          <div className="to-drawer-titles">
            <div className="to-drawer-title">{title}</div>
            {subtitle ? <div className="to-drawer-subtitle">{subtitle}</div> : null}
          </div>
          <button className="to-drawer-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="to-drawer-body">{children}</div>
      </aside>
    </>
  );
};
