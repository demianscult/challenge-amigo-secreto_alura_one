document.addEventListener('DOMContentLoaded', () => { 
    // Seleciona os elementos do DOM
    const amigoInput = document.querySelector('.input-name'); // Captura o campo de entrada
    const listaAmigos = document.getElementById('listaAmigos'); // Captura a lista de amigos
    const resultado = document.getElementById('resultado'); // Captura o elemento para exibir o resultado
    const buttonAdd = document.querySelector('.button-add'); // Captura o botão "Adicionar"
    const buttonDraw = document.querySelector('.button-draw'); // Captura o botão "Sortear Amigo"

    // Array para armazenar os nomes
    let nomes = [];

    // Função para adicionar um nome à lista
    function adicionarAmigo() {
        // 1. Capturar o valor do campo de entrada
        const nome = amigoInput.value.trim(); // Remove espaços em branco no início e no fim

        // 2. Validar a entrada
        if (!nome || nome.trim().length === 0) { // Verifica se o nome é vazio ou consiste apenas de espaços em branco
            alert('Por favor, insira um nome válido.');
            return; // Sai da função
        }

        // 3. Atualizar o array de amigos
        nomes.push(nome); // Adiciona o nome ao array

        // 4. Limpar o campo de entrada
        amigoInput.value = ''; // Redefine o campo de texto para uma string vazia

        // 5. Atualizar a lista na tela
        atualizarLista();
    }

    // Função para atualizar a lista de nomes na tela
    function atualizarLista() {
        // Limpa a lista atual
        listaAmigos.innerHTML = '';

        // Adiciona cada nome à lista
        nomes.forEach((nome) => {
            const li = document.createElement('li'); // Cria um novo elemento <li>
            li.textContent = nome; // Define o texto do <li> como o nome
            listaAmigos.appendChild(li); // Adiciona o <li> à lista
        });
    }

    // Função para sortear um nome aleatório
    function sortearAmigo() {
        // Verifica se há nomes na lista
        if (nomes.length === 0) {
            alert('Adicione pelo menos um nome antes de sortear.');
            return;
        }

        // Sorteia um índice aleatório
        const indiceSorteado = Math.floor(Math.random() * nomes.length);
        const nomeSorteado = nomes[indiceSorteado];

        // Exibe o resultado na tela
        resultado.textContent = `O amigo secreto é: ${nomeSorteado}`;
    }

    // Adiciona os event listeners
    buttonAdd.addEventListener('click', adicionarAmigo); // Botão "Adicionar"
    buttonDraw.addEventListener('click', sortearAmigo); // Botão "Sortear Amigo"
});