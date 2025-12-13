export type Trip = { id: string; traveller: string; destination: string; dates: string; status: string; notes?: string; };
export type Quote = { id: string; reference: string; traveller: string; destination: string; value: string; status: string; notes?: string; };
export type Client = { id: string; name: string; segment: string; notes: string; };
export type Task = { id: string; title: string; due: string; context: string; notes?: string; };

export const store = {
  trips: [] as Trip[],
  quotes: [] as Quote[],
  clients: [] as Client[],
  tasks: [] as Task[]
};

let idSeq = 1;
export const uid = (p:string)=> `${p}_${idSeq++}`;
