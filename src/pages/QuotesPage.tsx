import React, { useMemo, useState } from "react";
import { store } from "../data/store";
import { DetailDrawer } from "../components/DetailDrawer";
const STATUSES = ["Draft","Waiting reply","Sent","Accepted"];
export const QuotesPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = useMemo(()=> selectedId? store.quotes.find(q=>q.id===selectedId)??null : null,[selectedId]);
  const [notes,setNotes]=useState(""); const [status,setStatus]=useState("");
  const dirty = selected? (notes!==(selected.notes??"") || status!==selected.status): false;
  React.useEffect(()=>{ if(selected){ setNotes(selected.notes??""); setStatus(selected.status);} },[selected]);
  const save=()=>{ if(selected){ selected.notes=notes; selected.status=status; alert("Saved"); } };
  return (
    <main className="to-dashboard"><section className="to-section"><h1 className="to-h1">Quotes</h1>
      <div className="to-table-card">
        <div className="to-table-header to-table-header-5"><span>Ref</span><span>Traveller</span><span>Destination</span><span>Value</span><span>Status</span></div>
        {store.quotes.map(q=>(
          <div key={q.id} className={"to-table-row to-table-row-5 to-table-row-clickable"+(q.id===selectedId?" to-table-row-selected":"")} onClick={()=>setSelectedId(q.id)}>
            <span>{q.reference}</span><span>{q.traveller}</span><span>{q.destination}</span><span>{q.value}</span><span className="to-pill-slim">{q.status}</span>
          </div>
        ))}
      </div>
      <DetailDrawer isOpen={!!selected} title={selected?selected.reference:"Quote"} subtitle={selected?`${selected.traveller} · ${selected.destination}`:undefined} dirty={dirty} onClose={()=>setSelectedId(null)}>
        {selected && (
          <div className="to-drawer-grid">
            <div className="to-kv"><div className="to-k">Status</div>
              <select className="to-input" value={status} onChange={e=>setStatus(e.target.value)}>
                {STATUSES.map(s=><option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="to-kv to-kv-wide"><div className="to-k">Notes</div>
              <textarea className="to-textarea" value={notes} onChange={e=>setNotes(e.target.value)} />
            </div>
            <div className="to-drawer-actions">
              <button className="to-ghost-btn" onClick={()=>{ if(selected){ setNotes(selected.notes??""); setStatus(selected.status);} }}>Cancel</button>
              <button className="to-primary-btn" onClick={save}>Save</button>
            </div>
          </div>
        )}
      </DetailDrawer>
    </section></main>
  );
};
