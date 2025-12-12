export type Trip = {
  traveller: string;
  destination: string;
  dates: string;
  status: string;
};

export type Quote = {
  reference: string;
  traveller: string;
  destination: string;
  value: string;
  status: string;
};

export type Client = {
  name: string;
  segment: string;
  notes: string;
};

export type Task = {
  title: string;
  due: string;
  context: string;
};

export const store = {
  trips: [
    { traveller: "Ana & Marco Silva", destination: "Lisbon", dates: "12–17 Apr", status: "Confirmed" },
    { traveller: "J. Martinez", destination: "New York", dates: "03–09 May", status: "Quote sent" },
    { traveller: "Smith family", destination: "Orlando", dates: "21–28 Jun", status: "Deposit due" }
  ] as Trip[],
  quotes: [
    { reference: "Q-2048", traveller: "L. Rossi", destination: "Rome", value: "€2,150", status: "Waiting reply" },
    { reference: "Q-2052", traveller: "Chen family", destination: "Tokyo", value: "¥640,000", status: "Draft" }
  ] as Quote[],
  clients: [
    { name: "Ana & Marco Silva", segment: "Leisure · Europe", notes: "Anniversary trip specialists" },
    { name: "Brightline Consulting", segment: "Corporate", notes: "Prefers business hotels near city center" },
    { name: "Chen family", segment: "Leisure · Asia", notes: "School holidays only" }
  ] as Client[],
  tasks: [
    { title: "Confirm airport transfer with supplier", due: "Today", context: "Lisbon · Silva" },
    { title: "Send updated NYC hotel options", due: "Tomorrow", context: "New York · Martinez" },
    { title: "Chase deposit for Orlando trip", due: "This week", context: "Orlando · Smith family" }
  ] as Task[]
};
