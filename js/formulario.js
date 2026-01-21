const formulario = document.querySelector("form");

function formualrioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      '<p class="font-2-l" style="grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7"><span style="color: #317a00">Mensagem enviada</span>, em vreve entraremos em contato. Geralmente respondemos em 24h.</p>';
  } else {
    formulario.innerHTML =
      '<p class="font-2-l" style="grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7"><span style="color: #E00000">Erro no envio</span>. Você pode enviar diretamente para nosso email em: contato@bikcraft.net ou recarregar a página e tentar novamente.</p>';
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";
  console.log(event.timeStamp);

  const data = new FormData(formulario);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formualrioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
