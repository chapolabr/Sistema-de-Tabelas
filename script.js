// Array para armazenar os dados
let dados = [];

// Função para adicionar dados ao array e atualizar a tabela
function adicionarDados() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const email = document.getElementById('email').value;

    // Adiciona os dados ao array
    dados.push({ nome, idade, email });

    // Limpa o formulário
    document.getElementById('dataForm').reset();

    // Atualiza a tabela
    atualizarTabela();
}

// Função para atualizar a tabela com os dados do array
function atualizarTabela() {
    const tbody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    // Itera sobre os dados e cria as linhas da tabela
    dados.forEach((item, index) => {
        const row = tbody.insertRow();

        const cellNome = row.insertCell(0);
        const cellIdade = row.insertCell(1);
        const cellEmail = row.insertCell(2);

        cellNome.innerText = item.nome;
        cellIdade.innerText = item.idade;
        cellEmail.innerText = item.email;
    });
}
