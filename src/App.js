// src/App.js
import React, { useEffect, useState } from "react";
import { connect, iAmReady } from "@tiendanube/nexo/helpers";
import nexo from "./nexoClient";

const App = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    connect(nexo).then(() => {
      setIsConnected(true);
      iAmReady(nexo);
    }).catch((error) => {
      console.error("Erro ao conectar com Nexo:", error);
    });
  }, []);

  if (!isConnected) return <div>Conectando com o painel da Nuvemshop...</div>;

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Comprei Agora 🚀</h1>
      <p>App pronto para uso no Admin!</p>
    </div>
  );
};

export default App;
