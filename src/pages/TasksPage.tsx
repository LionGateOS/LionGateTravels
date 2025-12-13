import React, { useMemo, useState } from "react";
import { store, uid } from "../data/store";
import { DetailDrawer } from "../components/DetailDrawer";
import { EmptyState } from "../components/EmptyState";
export const TasksPage: React.FC = () => {
  const [selectedId,setSelectedId]=useState<string|null>(null);
  const selected = useMemo(()=> selectedId? store.tasks.find(t=>t.id===selectedId)??null:null,[selectedId]);
  const [title,setTitle]=useState(""); const [notes,setNotes]=useState("");
  const dirty = selected? notes!==(selected.notes??""): title!=="";
  const create=()=>{ const t={ id: uid("task"), title: title||"New task", due:"—", context:"—", notes }; store.tasks.push(t); setSelectedId(t.id); setTitle(""); setNotes(""); };
  React.useEffect(()=>{ if(selected){ setNotes(selected.notes??""); } },[selected]);
  const save=()=>{ if(selected){ selected.notes=notes; alert("Saved"); } };
  return (
    <main className="to-dashboard"><section className="to-section"><h1 className="to-h1">Tasks</h1>
      {store.tasks.length===0 ? <EmptyState title="No tasks yet" onCreate={()=>setSelectedId("__new")} /> : (
        <div className="to-table-card">
          <div className="to-table-header to-table-header-3"><span>Task</span><span>When</span><span>Related to</span></div>
          {store.tasks.map(t=>(
            <div key={t.id} className={"to-table-row to-table-row-3 to-table-row-clickable"+(t.id===selectedId?" to-table-row-selected":"")} onClick={()=>setSelectedId(t.id)}>
              <span>{t.title}</span><span>{t.due}</span><span>{t.context}</span>
            </div>
          ))}
        </div>
      )}
      <DetailDrawer isOpen={!!selectedId} title={selected?selected.title:"New Task"} dirty={dirty} onClose={()=>setSelectedId(null)}>
        {!selected ? (
          <div className="to-drawer-grid">
            <div className="to-kv"><div className="to-k">Title</div><input className="to-input" value={title} onChange={e=>setTitle(e.target.value)} /></div>
            <div className="to-kv to-kv-wide"><div className="to-k">Notes</div><textarea className="to-textarea" value={notes} onChange={e=>setNotes(e.target.value)} /></div>
            <div className="to-drawer-actions"><button className="to-primary-btn" onClick={create}>Create</button></div>
          </div>
        ):(
          <div className="to-drawer-grid">
            <div className="to-kv to-kv-wide"><div className="to-k">Notes</div><textarea className="to-textarea" value={notes} onChange={e=>setNotes(e.target.value)} /></div>
            <div className="to-drawer-actions"><button className="to-ghost-btn" onClick={()=>setSelectedId(null)}>Close</button><button className="to-primary-btn" onClick={save}>Save</button></div>
          </div>
        )}
      </DetailDrawer>
    </section></main>
  );
};
