export type Trip = { id: string; traveller: string; destination: string; dates: string; status: string; notes?: string; };
export type Quote = { id: string; reference: string; traveller: string; destination: string; value: string; status: string; notes?: string; };
export type Client = { id: string; name: string; segment: string; notes: string; };
export type Task = { id: string; title: string; due: string; context: string; notes?: string; };

export type StoreState = {
  trips: Trip[];
  quotes: Quote[];
  clients: Client[];
  tasks: Task[];
};

const KEY = "travelorchestrator.store.v1";
const UNDO_KEY = "travelorchestrator.store.undo";

const empty: StoreState = { trips: [], quotes: [], clients: [], tasks: [] };

export const loadState = (): StoreState => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : empty;
  } catch {
    return empty;
  }
};

export const saveState = (state: StoreState) => {
  localStorage.setItem(KEY, JSON.stringify(state));
};

export const pushUndo = (state: StoreState) => {
  localStorage.setItem(UNDO_KEY, JSON.stringify(state));
};

export const undo = (): StoreState | null => {
  const raw = localStorage.getItem(UNDO_KEY);
  return raw ? JSON.parse(raw) : null;
};

let idSeq = Date.now();
export const uid = (p:string)=> `${p}_${idSeq++}`;
