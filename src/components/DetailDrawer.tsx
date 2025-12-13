import React from "react";
type Props = { isOpen: boolean; title: string; subtitle?: string; dirty?: boolean; children: React.ReactNode; onClose: () => void; };
export const DetailDrawer: React.FC<Props> = ({ isOpen, title, subtitle, dirty, children, onClose }) => (
  <>
    <div className={"to-drawer-overlay"+(isOpen?" to-drawer-overlay-open":"")} onClick={onClose} />
    <aside className={"to-drawer"+(isOpen?" to-drawer-open":"")}>
      <div className="to-drawer-header">
        <div className="to-drawer-titles">
          <div className="to-drawer-title">{title}{dirty? <span className="to-dirty"> • unsaved</span>:null}</div>
          {subtitle? <div className="to-drawer-subtitle">{subtitle}</div>:null}
        </div>
        <button className="to-drawer-close" onClick={onClose}>✕</button>
      </div>
      <div className="to-drawer-body">{children}</div>
    </aside>
  </>
);
