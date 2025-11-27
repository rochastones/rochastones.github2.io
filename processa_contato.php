<?php
// Mostrar erros (apenas em desenvolvimento)
ini_set('display_errors', 0);
error_reporting(0);

// Verificar se é POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: form_contato.html");
    exit;
}

$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "dbcontato";

// Conexão com o banco
$conn = new mysqli($host, $usuario, $senha, $banco);

if ($conn->connect_error) {
    header("Location: form_contato.html?erro=conexao");
    exit;
}

// Coletar dados
$nome = $_POST['nome'] ?? '';
$telefone = $_POST['telefone'] ?? '';
$email = $_POST['email'] ?? '';
$servico = $_POST['servico'] ?? '';
$opcao = $_POST['opcao'] ?? '';
$comentarios = $_POST['comentarios'] ?? '';

// Verificar preechimento dos campos obrigatórios
if (empty($nome) || empty($telefone) || empty($email) || empty($servico) || empty($comentarios)) {
    header("Location: form_contato.html?erro=campos");
    $conn->close();
    exit;
}

// Inserir no banco
$sql = "INSERT INTO tbclientes (nome, telefone, email, servico, opcao, comentarios) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

if ($stmt) {
    $stmt->bind_param("ssssss", $nome, $telefone, $email, $servico, $opcao, $comentarios);
    
    if ($stmt->execute()) {
        // ✅ VOLTA PARA FORMULÁRIO COM SUCESSO
        header("Location: form_contato.html?sucesso=1");
    } else {
        header("Location: form_contato.html?erro=banco");
    }
    
    $stmt->close();
} else {
    header("Location: form_contato.html?erro=preparacao");
}

$conn->close();
exit;
?>