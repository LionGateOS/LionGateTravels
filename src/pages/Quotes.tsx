
import React from "react";import {SearchBar} from "../components/SearchBar";import {uid} from "../data/store";
export default function Quote({state,setState}:any){
 const [q,setQ]=React.useState("");
 const items=state.quotes.filter((i:any)=>JSON.stringify(i).toLowerCase().includes(q.toLowerCase()));
 return (<div className="to-dashboard">
  <h1>Quote</h1>
  <SearchBar value={q} onChange={setQ} placeholder="Search"/>
  <button className="to-primary-btn" onClick={()=>setState({...state,quotes:[...state.quotes,{id:uid("quote"),name:"New Quote"}]})}>New</button>
  <ul>{items.map((i:any)=>(<li key={i.id}>{i.name||i.id}</li>))}</ul>
 </div>);
}
