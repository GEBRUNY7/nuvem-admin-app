// src/nexoClient.js (ou .ts)
import nexo from "@tiendanube/nexo";

const instance = nexo.create({
  clientId: "17891", // fornecido no painel da Nuvemshop
  log: true,
});

export default instance;
