export type Trip = {
  id: string;
  traveller: string;
  destination: string;
  dates: string;
  status: string;
};

export type Quote = {
  id: string;
  reference: string;
  traveller: string;
  destination: string;
  value: string;
  status: string;
};

export type Client = {
  id: string;
  name: string;
  segment: string;
  notes: string;
};

export type Task = {
  id: string;
  title: string;
  due: string;
  context: string;
};

export const store = {
  trips: [
    { id: "t1", traveller: "Ana & Marco Silva", destination: "Lisbon", dates: "12–17 Apr", status: "Confirmed" },
    { id: "t2", traveller: "J. Martinez", destination: "New York", dates: "03–09 May", status: "Quote sent" },
    { id: "t3", traveller: "Smith family", destination: "Orlando", dates: "21–28 Jun", status: "Deposit due" }
  ] as Trip[],
  quotes: [
    { id: "q1", reference: "Q-2048", traveller: "L. Rossi", destination: "Rome", value: "€2,150", status: "Waiting reply" },
    { id: "q2", reference: "Q-2052", traveller: "Chen family", destination: "Tokyo", value: "¥640,000", status: "Draft" }
  ] as Quote[],
  clients: [
    { id: "c1", name: "Ana & Marco Silva", segment: "Leisure · Europe", notes: "Anniversary trip specialists" },
    { id: "c2", name: "Brightline Consulting", segment: "Corporate", notes: "Prefers business hotels near city center" },
    { id: "c3", name: "Chen family", segment: "Leisure · Asia", notes: "School holidays only" }
  ] as Client[],
  tasks: [
    { id: "ta1", title: "Confirm airport transfer with supplier", due: "Today", context: "Lisbon · Silva" },
    { id: "ta2", title: "Send updated NYC hotel options", due: "Tomorrow", context: "New York · Martinez" },
    { id: "ta3", title: "Chase deposit for Orlando trip", due: "This week", context: "Orlando · Smith family" }
  ] as Task[]
};
