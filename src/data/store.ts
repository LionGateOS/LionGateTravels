/**
 * Global simple data store for v10.
 * Provides shared arrays for trips, clients, quotes, tasks.
 */

export const store = {
  trips: [
    { traveller: "Ana & Marco Silva", destination: "Lisbon", dates: "12–17 Apr", status: "Confirmed" }
  ],
  quotes: [
    { reference: "Q-2048", traveller: "L. Rossi", destination: "Rome", value: "€2,150", status: "Waiting reply" }
  ],
  clients: [
    { name: "Ana & Marco Silva", segment: "Leisure · Europe", notes: "Anniversary trips" }
  ],
  tasks: [
    { title: "Confirm supplier timing", due: "Today", context: "Lisbon · Silva" }
  ]
};
