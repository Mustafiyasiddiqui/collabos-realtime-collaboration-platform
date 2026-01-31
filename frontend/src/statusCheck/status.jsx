import { useState } from "react";

export default function Status() {
  const [status, setStatus] = useState("");
  const checkStatus = async () => {
    try {
      const res = await fetch("http://localhost:3000/status");
      const data = await res.json();
      setStatus(data.status);
    } catch (error) {
      setStatus("server not reachable");
    }
  };
  return (
    <div>
      <h1>Backend Connection Test</h1>
      <button onClick={checkStatus}>Check Server Status</button>

      {status && <p>{status}</p>}
    </div>
  );
}
