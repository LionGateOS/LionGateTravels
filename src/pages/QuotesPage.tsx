import React, { useMemo, useState } from "react";
import { store } from "../data/store";
import { DetailDrawer } from "../components/DetailDrawer";

export const QuotesPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = useMemo(() => {
    if (!selectedId) return null;
    return store.quotes.find((q) => q.id === selectedId) ?? null;
  }, [selectedId]);

  return (
    <main className="to-dashboard">
      <section className="to-section">
        <h1 className="to-h1">Quotes</h1>
        <p className="to-muted">Recent travel proposals that may need updates, follow-up or confirmation.</p>

        <div className="to-table-card">
          <div className="to-table-header to-table-header-5">
            <span>Ref</span>
            <span>Traveller</span>
            <span>Destination</span>
            <span>Value</span>
            <span>Status</span>
          </div>

          {store.quotes.map((quote) => (
            <div
              key={quote.id}
              className={
                "to-table-row to-table-row-5 to-table-row-clickable" +
                (quote.id === selectedId ? " to-table-row-selected" : "")
              }
              onClick={() => setSelectedId(quote.id)}
            >
              <span>{quote.reference}</span>
              <span>{quote.traveller}</span>
              <span>{quote.destination}</span>
              <span>{quote.value}</span>
              <span className="to-pill-slim">{quote.status}</span>
            </div>
          ))}
        </div>

        <DetailDrawer
          isOpen={Boolean(selected)}
          title={selected ? selected.reference : "Quote details"}
          subtitle={selected ? `${selected.traveller} · ${selected.destination}` : undefined}
          onClose={() => setSelectedId(null)}
        >
          {selected ? (
            <div className="to-drawer-grid">
              <div className="to-kv">
                <div className="to-k">Status</div>
                <div className="to-v">{selected.status}</div>
              </div>
              <div className="to-kv">
                <div className="to-k">Value</div>
                <div className="to-v">{selected.value}</div>
              </div>
              <div className="to-kv to-kv-wide">
                <div className="to-k">Notes</div>
                <div className="to-v">{selected.notes ?? "—"}</div>
              </div>

              <div className="to-drawer-actions">
                <button className="to-ghost-btn" onClick={() => alert("Next: quote breakdown")}>View breakdown</button>
                <button className="to-primary-btn" onClick={() => alert("Next: send quote")}>Send quote</button>
              </div>
            </div>
          ) : null}
        </DetailDrawer>
      </section>
    </main>
  );
};
