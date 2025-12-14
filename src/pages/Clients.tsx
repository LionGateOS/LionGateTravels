
import React from "react";import {SearchBar} from "../components/SearchBar";import {uid} from "../data/store";
export default function Client({state,setState}:any){
 const [q,setQ]=React.useState("");
 const items=state.clients.filter((i:any)=>JSON.stringify(i).toLowerCase().includes(q.toLowerCase()));
 return (<div className="to-dashboard">
  <h1>Client</h1>
  <SearchBar value={q} onChange={setQ} placeholder="Search"/>
  <button className="to-primary-btn" onClick={()=>setState({...state,clients:[...state.clients,{id:uid("client"),name:"New Client"}]})}>New</button>
  <ul>{items.map((i:any)=>(<li key={i.id}>{i.name||i.id}</li>))}</ul>
 </div>);
}
