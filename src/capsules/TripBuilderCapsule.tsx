
import React, { useState } from "react";

export default function TripBuilderCapsule() {
  const [bags, setBags] = useState(0);

  return (
    <div style={{ padding: "16px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h3>Trip Builder</h3>

      <label>Bags:</label>
      <input
        type="number"
        min={0}
        max={4}
        value={bags}
        onChange={(e) => setBags(parseInt(e.target.value || "0", 10))}
        style={{ width: "60px", padding: "6px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
    </div>
  );
}
