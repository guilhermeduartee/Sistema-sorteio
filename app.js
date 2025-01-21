let listaDeNomes = [];
let nomeSorteado = "";

function exibirTextoNaTela(tag, texto) {
  const campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

// Exibir mensagem inicial
function exibirMensagemInicial() {
  exibirTextoNaTela(".section-title", "Digite o nome dos seus amigos");
  exibirTextoNaTela("#resultado", "Pronto para começar o sorteio?");
}

exibirMensagemInicial();

// Função para adicionar um nome à lista
function adicionarAmigo() {
  const inputNome = document.querySelector("#amigo");
  const nome = inputNome.value.trim(); // Remove espaços extras

  if (nome) {
    listaDeNomes.push(nome);
    atualizarListaDeNomes();
    inputNome.value = "";
    inputNome.focus();
  } else {
    alert("O nome inserido é inválido!");
  }
}

// Atualizar a lista exibida na tela
function atualizarListaDeNomes() {
  const listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = ""; // Limpa a lista anterior

  listaDeNomes.forEach((nome, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${nome}`;
    listaAmigos.appendChild(li);
  });
}

// Sortear um nome aleatório
function sortearAmigo() {
  if (listaDeNomes.length === 0) {
    exibirTextoNaTela("#resultado", "A lista está vazia. Adicione pelo menos um nome antes de sortear.");
    return;
  }

  nomeSorteado = gerarNomeAleatorio();
  exibirTextoNaTela("#resultado", `O amigo sorteado é: ${nomeSorteado}`);
}

// Gerar um nome aleatório sem repetir até reiniciar
function gerarNomeAleatorio() {
  const quantidadeDeNomes = listaDeNomes.length;
  const indiceAleatorio = Math.floor(Math.random() * quantidadeDeNomes);
  const nome = listaDeNomes[indiceAleatorio];

  // Remove o nome sorteado para evitar repetições
  listaDeNomes.splice(indiceAleatorio, 1);
  atualizarListaDeNomes();

  return nome;
}

// Reiniciar o sorteio
function reiniciarSorteio() {
  listaDeNomes = [];
  nomeSorteado = "";
  atualizarListaDeNomes();
  exibirMensagemInicial();
}
