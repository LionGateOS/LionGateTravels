import React, { useMemo, useState } from "react";
import { store, uid } from "../data/store";
import { DetailDrawer } from "../components/DetailDrawer";
import { EmptyState } from "../components/EmptyState";

const STATUSES = ["Confirmed","Quote sent","Deposit due","Cancelled"];

export const TripsPage: React.FC = () => {
  const [selectedId,setSelectedId]=useState<string|null>(null);
  const selected = useMemo(()=> selectedId? store.trips.find(t=>t.id===selectedId)??null:null,[selectedId]);
  const [notes,setNotes]=useState(""); const [status,setStatus]=useState("Confirmed"); const [traveller,setTraveller]=useState("");
  const dirty = selected? (notes!==(selected.notes??"") || status!==selected.status): traveller!=="";

  const create = ()=>{
    const t={ id: uid("trip"), traveller: traveller||"New traveller", destination:"—", dates:"—", status, notes };
    store.trips.push(t); setSelectedId(t.id); setTraveller(""); setNotes(""); setStatus("Confirmed");
  };

  React.useEffect(()=>{ if(selected){ setNotes(selected.notes??""); setStatus(selected.status);} },[selected]);

  const save=()=>{ if(selected){ selected.notes=notes; selected.status=status; alert("Saved"); } };

  return (
    <main className="to-dashboard"><section className="to-section"><h1 className="to-h1">Trips</h1>
      {store.trips.length===0 ? <EmptyState title="No trips yet" onCreate={()=>setSelectedId("__new")} /> : (
        <div className="to-table-card">
          <div className="to-table-header"><span>Traveller</span><span>Destination</span><span>Dates</span><span>Status</span></div>
          {store.trips.map(t=>(
            <div key={t.id} className={"to-table-row to-table-row-clickable"+(t.id===selectedId?" to-table-row-selected":"")} onClick={()=>setSelectedId(t.id)}>
              <span>{t.traveller}</span><span>{t.destination}</span><span>{t.dates}</span><span className="to-pill-slim">{t.status}</span>
            </div>
          ))}
        </div>
      )}
      <DetailDrawer isOpen={!!selectedId} title={selected?selected.traveller:"New Trip"} dirty={dirty} onClose={()=>setSelectedId(null)}>
        {!selected ? (
          <div className="to-drawer-grid">
            <div className="to-kv"><div className="to-k">Traveller</div><input className="to-input" value={traveller} onChange={e=>setTraveller(e.target.value)} /></div>
            <div className="to-kv"><div className="to-k">Status</div>
              <select className="to-input" value={status} onChange={e=>setStatus(e.target.value)}>{STATUSES.map(s=><option key={s}>{s}</option>)}</select>
            </div>
            <div className="to-kv to-kv-wide"><div className="to-k">Notes</div><textarea className="to-textarea" value={notes} onChange={e=>setNotes(e.target.value)} /></div>
            <div className="to-drawer-actions"><button className="to-primary-btn" onClick={create}>Create</button></div>
          </div>
        ):(
          <div className="to-drawer-grid">
            <div className="to-kv"><div className="to-k">Status</div>
              <select className="to-input" value={status} onChange={e=>setStatus(e.target.value)}>{STATUSES.map(s=><option key={s}>{s}</option>)}</select>
            </div>
            <div className="to-kv to-kv-wide"><div className="to-k">Notes</div><textarea className="to-textarea" value={notes} onChange={e=>setNotes(e.target.value)} /></div>
            <div className="to-drawer-actions"><button className="to-ghost-btn" onClick={()=>setSelectedId(null)}>Close</button><button className="to-primary-btn" onClick={save}>Save</button></div>
          </div>
        )}
      </DetailDrawer>
    </section></main>
  );
};
