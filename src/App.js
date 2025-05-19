import React, { useEffect, useState } from "react";
import { connect, iAmReady } from "@tiendanube/nexo/helpers";
import nexo from "./nexoClient";

function App() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    connect(nexo)
      .then(() => {
        iAmReady(nexo);
        setIsConnected(true);
      })
      .catch((err) => {
        console.error("Erro ao conectar com Nexo:", err);
      });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Comprei Agora 🚀</h1>
      <p>
        {isConnected
          ? "✅ Conectado à Nuvemshop com sucesso!"
          : "Conectando com o painel da Nuvemshop..."}
      </p>
    </div>
  );
}

export default App;
