
import React from "react";import {SearchBar} from "../components/SearchBar";import {uid} from "../data/store";
export default function Trip({state,setState}:any){
 const [q,setQ]=React.useState("");
 const items=state.trips.filter((i:any)=>JSON.stringify(i).toLowerCase().includes(q.toLowerCase()));
 return (<div className="to-dashboard">
  <h1>Trip</h1>
  <SearchBar value={q} onChange={setQ} placeholder="Search"/>
  <button className="to-primary-btn" onClick={()=>setState({...state,trips:[...state.trips,{id:uid("trip"),name:"New Trip"}]})}>New</button>
  <ul>{items.map((i:any)=>(<li key={i.id}>{i.name||i.id}</li>))}</ul>
 </div>);
}
