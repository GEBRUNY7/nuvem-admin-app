// src/App.js
import React, { useEffect } from "react";
import { connect, iAmReady } from "@tiendanube/nexo/helpers";
import nexo from "@tiendanube/nexo";

function App() {
  useEffect(() => {
    async function iniciar() {
      try {
        await connect(nexo);
        iAmReady(nexo); // Informa ao admin da Nuvemshop que o app está pronto
      } catch (err) {
        console.error("Erro ao conectar com Nexo:", err);
      }
    }

    iniciar();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Comprei Agora 🚀</h1>
      <p>Seu app está rodando com sucesso dentro da Nuvemshop.</p>
    </div>
  );
}

export default App;
