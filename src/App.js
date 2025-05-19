import React, { useEffect, useState } from "react";
import { connect, iAmReady } from "@tiendanube/nexo/helpers";
import nexo from "@tiendanube/nexo";

function App() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    connect(nexo).then(() => {
      setIsConnected(true);
      iAmReady(nexo);
    }).catch((err) => {
      console.error("Erro ao conectar com Nexo:", err);
    });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Comprei Agora 🚀</h1>
      {isConnected ? (
        <p>App conectado com sucesso à Nuvemshop!</p>
      ) : (
        <p>Conectando com Nuvemshop...</p>
      )}
    </div>
  );
}

export default App;
