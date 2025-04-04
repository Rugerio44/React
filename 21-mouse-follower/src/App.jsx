import { useState } from "react";
import MouseFollower from "../src/components/MouseFollower.jsx";
import React from "react";
import "./App.css";

function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <MouseFollower enabled={enabled} />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} Seguir el puntero
      </button>
    </>
  );
}

export default App;
