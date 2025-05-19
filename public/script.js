(function () {
  // CONFIGURAÇÃO: personalize as mensagens e tempo aqui
  const tempoEntreNotificacoes = 8000; // 8 segundos entre cada
  const mensagens = [
    {
      nome: "Juliana",
      cidade: "São Paulo",
      produto: "Tênis Esportivo RunFast",
      link: "/products/tenis-runfast",
      emoji: "👟"
    },
    {
      nome: "Carlos",
      cidade: "Belo Horizonte",
      produto: "Relógio Digital ProTime",
      link: "/products/relogio-protime",
      emoji: "⌚"
    },
    {
      nome: "Aline",
      cidade: "Curitiba",
      produto: "Kit Skincare Natural",
      link: "/products/kit-skincare",
      emoji: "💆‍♀️"
    },
    {
      nome: "Lucas",
      cidade: "Recife",
      produto: "Smartphone Galaxy X12",
      link: "/products/smartphone-x12",
      emoji: "📱"
    }
  ];

  // ESTILO visual (injetado dinamicamente)
  const style = document.createElement("style");
  style.innerHTML = `
    .notificacao-compra {
      position: fixed;
      bottom: 30px;
      left: 30px;
      background: #1d4ed8;
      color: white;
      font-family: sans-serif;
      padding: 16px 20px;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      max-width: 320px;
      z-index: 99999;
      animation: slideIn 0.5s ease, fadeOut 0.5s ease 4.5s forwards;
    }
    .notificacao-compra strong {
      font-weight: bold;
    }
    .notificacao-compra a {
      display: inline-block;
      margin-top: 8px;
      color: #fff;
      text-decoration: underline;
      font-size: 14px;
    }
    @keyframes slideIn {
      from { opacity: 0; transform: translateY(40px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeOut {
      to { opacity: 0; transform: translateY(20px); }
    }

    @media (max-width: 600px) {
      .notificacao-compra {
        bottom: 20px;
        left: 10px;
        right: 10px;
        max-width: none;
      }
    }
  `;
  document.head.appendChild(style);

  // FUNÇÃO para mostrar a notificação
  let index = 0;

  function exibirNotificacao() {
    const msg = mensagens[index];

    const div = document.createElement("div");
    div.className = "notificacao-compra";
    div.innerHTML = `
      ${msg.emoji} <strong>${msg.nome}</strong> de <strong>${msg.cidade}</strong> acabou de comprar <strong>${msg.produto}</strong>!<br>
      <a href="${msg.link}">Ver produto</a>
    `;

    document.body.appendChild(div);

    setTimeout(() => {
      div.remove();
    }, 5000); // exibe por 5 segundos

    index = (index + 1) % mensagens.length;
  }

  // INICIAR ciclo automático
  setInterval(exibirNotificacao, tempoEntreNotificacoes);

  // Mostrar a primeira imediatamente (opcional)
  setTimeout(exibirNotificacao, 2000);
})();
