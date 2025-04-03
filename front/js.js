async function puxando_api() {
  const response = await fetch("http://127.0.0.1:8000/api/v1/personagem");
  const data = await response.json();
  return data;
}

async function mostrar_personagem() {
  const personagens = await puxando_api();
  const container = document.getElementById("transformers-container");
  function puxar_api() {
    // Function implementation
  }

  personagens.forEach((element) => {
    const personagemDiv = document.createElement("div");
    personagemDiv.classList.add("element");
    personagemDiv.innerHTML = `
        <h2>${element.nome}</h2>
        <img src = "${element.foto}"></img>
        <p>${element.time}</p>
        `;
    container.append(personagemDiv);
  });
}

(async () => {
  await puxar_api();
})();
