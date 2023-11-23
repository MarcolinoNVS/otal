<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    // Configuração do destinatário e assunto do e-mail
    $destinatario = "marcos4850@gmail.com";
    $assunto = "Nova mensagem de contato";

    // Monta o corpo do e-mail
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "E-mail: $email\n\n";
    $corpo_email .= "Mensagem:\n$mensagem";

    // Envia o e-mail
    mail($destinatario, $assunto, $corpo_email);

    // Redireciona de volta para a página de contato
    header("Location: contato.html");
    exit();
}
?>
