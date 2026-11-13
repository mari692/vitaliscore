const formularioCadastro = document.getElementById("formCadastro");
const mensagemCadastro = document.getElementById("mensagemCadastro");

formularioCadastro.addEventListener("submit", (event) => {
    event.preventDefault();
    mensagemCadastro.textContent = "Dados validados. Nenhuma informação foi salva ou enviada nesta demonstração.";
});
