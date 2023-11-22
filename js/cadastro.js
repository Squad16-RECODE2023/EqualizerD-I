const clientes = []; // Array (vetor em visualG) para armazenar os dados dos clientes.

// Lógica (função) para cadastrar um cliente.
document.getElementById('btn-cadastro-cliente').addEventListener('click', () => {
  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('cpf').value;
  const nascimento = document.getElementById('nascimento').value;
  const email = document.getElementById('email').value;
  const conEmail = document.getElementById('conEmail').value;
  const telefone = document.getElementById('telefone').value;
  const senha = document.getElementById('senha').value;
  const conSenha = document.getElementById('conSenha').value;

  // Validação dos campos (preciso declarar os campos que serão salvos)
  if (!nome || !email || !cpf || !nascimento || !conEmail || !senha || !conSenha || !telefone) {
    alert('Preencha todos os campos.');
    return;
  }
  //Fim - Lógica (função) para cadastrar um cliente. ================================================================================

  // Analizaer estebloco para entender pq não funcionou: =============================================================================
  // Lógica (função) para validar os campos de E-mail e senha:
  function validarCampos() {
    // Obter os valores dos campos
    const email = document.getElementById('email').value;
    const conEmail = document.getElementById('conEmail').value;
    const senha = document.getElementById('senha').value;
    const conSenha = document.getElementById('conSenha').value;

    // Verifica se os campos E-mail e senha correspondem aos campos originais
    if (email !== conEmail) {
      alert('Email de confirmação não corresponde ao email original.');
      return false;
    }

    if (senha !== conSenha) {
      alert('Senha de confirmação não corresponde à senha original.');
      return false;
    }

    // Se tudo estiver certo, continua com o envio do formulário (novo cadastro).
    return true;
  }
  //Fim - Analizaer estebloco para entender pq não funcionou. ========================================================================

  // Cria um novo cliente (crie os campos como se fosse uma tabela do MySQL). ========================================================
  const cliente = {
    id: clientes.length + 1, // contador para salvar clientes (numa lógica de BD é igual a o "AUTO INCREMENTE").
    nome: nome,
    cpf: cpf,
    nascimento: nascimento,
    email: email,
    telefone: telefone,
    senha: senha
  };
  //Fim - Cria um novo cliente (crie os campos como se fosse uma tabela do MySQL). ==================================================

  // Adiciona o cliente no vetor (array). ===========================================================================================
  clientes.push(cliente);

  // Limpa os campos de entrada, para novo cadastro.
  document.getElementById('nome').value = '';
  document.getElementById('cpf').value = '';
  document.getElementById('nascimento').value = '';
  document.getElementById('email').value = '';
  document.getElementById('conEmail').value = '';
  document.getElementById('telefone').value = '';
  document.getElementById('senha').value = '';
  document.getElementById('conSenha').value = '';

  // Atualiza a tabela
  atualizarTabelaClientes();

  // Mostra uma mensagem com o ID do cliente para consultas futuras.
  alert(`Seu ID é ${cliente.id} guarde em um local seguro.`); // Não está funcionando =[ (pesquisar!!!).
});
//Fim - Adiciona o cliente no vetor (array). ========================================================================================

// Lógica (função) para consultar um cliente. =======================================================================================
document.getElementById('btn-consultar').addEventListener('click', () => {
  const consultaId = parseInt(document.getElementById('consulta-id').value);
  const cliente = clientes.find(c => c.id === consultaId);

  if (cliente) {
    // Preenche os campos com os dados do cliente
    document.getElementById('nome').value = cliente.nome;
    document.getElementById('email').value = cliente.email;
    document.getElementById('cpf').value = cliente.cpf;
    document.getElementById('nascimento').value = cliente.nascimento; //não funcionou =[ (pesquisar).
    document.getElementById('telefone').value = cliente.telefone;
  } else {
    alert('Cliente não encontrado.'); //Mensagem caso o id seja inválido.
  }
});
//Fim - Lógica (função) para consultar um cliente. ==================================================================================

// Lógica (função) para excluir um cliente. =========================================================================================
document.getElementById('btn-excluir').addEventListener('click', () => {
  const consultaId = parseInt(document.getElementById('consulta-id').value);
  const clienteIndex = clientes.findIndex(c => c.id === consultaId);

  if (clienteIndex !== -1) { //Preciso estudar mais esta lógica (funciona mas eu não entendo)
    // Remove o cliente do array
    clientes.splice(clienteIndex, 1);

    // Limpa os campos de entrada.
    document.getElementById('nome').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('nascimento').value = '';
    document.getElementById('email').value = '';
    document.getElementById('conEmail').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('senha').value = '';
    document.getElementById('conSenha').value = '';

    // Atualiza a tabela
    atualizarTabelaClientes();
  } else {
    alert('Cliente não encontrado.');
  }
});
//Fim - Lógica (função) para excluir um cliente. ====================================================================================

// Lógica (funçaõ) para atualizar a tabela de clientes. =============================================================================
function atualizarTabelaClientes() {
  const tableBody = document.querySelector('#clientes-table tbody');
  tableBody.innerHTML = '';

  clientes.forEach(cliente => {
    const row = tableBody.insertRow();
    row.innerHTML = `<td>${cliente.id}</td><td>${cliente.nome}</td><td>${cliente.email}</td><td>${cliente.telefone}</td><td><button class="btn btn-info">Editar</button> <button class="btn btn-danger">Excluir</button></td>`;
  });
}
//Fim - Lógica (funçaõ) para atualizar a tabela de clientes. ========================================================================