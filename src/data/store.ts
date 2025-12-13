export type Trip = { id: string; traveller: string; destination: string; dates: string; status: string; notes?: string; };
export type Quote = { id: string; reference: string; traveller: string; destination: string; value: string; status: string; notes?: string; };
export type Client = { id: string; name: string; segment: string; notes: string; };
export type Task = { id: string; title: string; due: string; context: string; notes?: string; };

export const store = {
  trips: [
    { id: "t1", traveller: "Ana & Marco Silva", destination: "Lisbon", dates: "12–17 Apr", status: "Confirmed", notes: "Airport transfer confirmed." },
    { id: "t2", traveller: "J. Martinez", destination: "New York", dates: "03–09 May", status: "Quote sent", notes: "Midtown vs Downtown." },
    { id: "t3", traveller: "Smith family", destination: "Orlando", dates: "21–28 Jun", status: "Deposit due", notes: "Hold rooms until Friday." }
  ] as Trip[],
  quotes: [
    { id: "q1", reference: "Q-2048", traveller: "L. Rossi", destination: "Rome", value: "€2,150", status: "Waiting reply", notes: "4-star + tours." },
    { id: "q2", reference: "Q-2052", traveller: "Chen family", destination: "Tokyo", value: "¥640,000", status: "Draft", notes: "JR Pass option." }
  ] as Quote[],
  clients: [
    { id: "c1", name: "Ana & Marco Silva", segment: "Leisure · Europe", notes: "Anniversary trip" },
    { id: "c2", name: "Brightline Consulting", segment: "Corporate", notes: "City-center hotels" },
    { id: "c3", name: "Chen family", segment: "Leisure · Asia", notes: "School holidays only" }
  ] as Client[],
  tasks: [
    { id: "ta1", title: "Confirm airport transfer", due: "Today", context: "Lisbon · Silva", notes: "Call supplier." },
    { id: "ta2", title: "Send NYC hotel options", due: "Tomorrow", context: "NYC · Martinez", notes: "3 options." },
    { id: "ta3", title: "Chase deposit", due: "This week", context: "Orlando · Smith", notes: "Email + SMS." }
  ] as Task[]
};
