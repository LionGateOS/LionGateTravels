import React, { useMemo, useState } from "react";
import { store, uid } from "../data/store";
import { DetailDrawer } from "../components/DetailDrawer";
import { EmptyState } from "../components/EmptyState";
export const ClientsPage: React.FC = () => {
  const [selectedId,setSelectedId]=useState<string|null>(null);
  const selected = useMemo(()=> selectedId? store.clients.find(c=>c.id===selectedId)??null:null,[selectedId]);
  const [name,setName]=useState(""); const [notes,setNotes]=useState(""); const [segment,setSegment]=useState("Leisure");
  const dirty = selected? notes!==selected.notes: name!=="";
  const create=()=>{ const c={ id: uid("client"), name: name||"New client", segment, notes }; store.clients.push(c); setSelectedId(c.id); setName(""); setNotes(""); setSegment("Leisure"); };
  React.useEffect(()=>{ if(selected){ setNotes(selected.notes); setSegment(selected.segment);} },[selected]);
  const save=()=>{ if(selected){ selected.notes=notes; selected.segment=segment; alert("Saved"); } };
  return (
    <main className="to-dashboard"><section className="to-section"><h1 className="to-h1">Clients</h1>
      {store.clients.length===0 ? <EmptyState title="No clients yet" onCreate={()=>setSelectedId("__new")} /> : (
        <div className="to-table-card">
          <div className="to-table-header to-table-header-3"><span>Name</span><span>Segment</span><span>Notes</span></div>
          {store.clients.map(c=>(
            <div key={c.id} className={"to-table-row to-table-row-3 to-table-row-clickable"+(c.id===selectedId?" to-table-row-selected":"")} onClick={()=>setSelectedId(c.id)}>
              <span>{c.name}</span><span>{c.segment}</span><span>{c.notes}</span>
            </div>
          ))}
        </div>
      )}
      <DetailDrawer isOpen={!!selectedId} title={selected?selected.name:"New Client"} dirty={dirty} onClose={()=>setSelectedId(null)}>
        {!selected ? (
          <div className="to-drawer-grid">
            <div className="to-kv"><div className="to-k">Name</div><input className="to-input" value={name} onChange={e=>setName(e.target.value)} /></div>
            <div className="to-kv"><div className="to-k">Segment</div><input className="to-input" value={segment} onChange={e=>setSegment(e.target.value)} /></div>
            <div className="to-kv to-kv-wide"><div className="to-k">Notes</div><textarea className="to-textarea" value={notes} onChange={e=>setNotes(e.target.value)} /></div>
            <div className="to-drawer-actions"><button className="to-primary-btn" onClick={create}>Create</button></div>
          </div>
        ):(
          <div className="to-drawer-grid">
            <div className="to-kv"><div className="to-k">Segment</div><input className="to-input" value={segment} onChange={e=>setSegment(e.target.value)} /></div>
            <div className="to-kv to-kv-wide"><div className="to-k">Notes</div><textarea className="to-textarea" value={notes} onChange={e=>setNotes(e.target.value)} /></div>
            <div className="to-drawer-actions"><button className="to-ghost-btn" onClick={()=>setSelectedId(null)}>Close</button><button className="to-primary-btn" onClick={save}>Save</button></div>
          </div>
        )}
      </DetailDrawer>
    </section></main>
  );
};
