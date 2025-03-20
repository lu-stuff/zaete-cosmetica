document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const categoriasToggle = document.getElementById("categorias-toggle");
    const submenu = document.getElementById("submenu");


    // Exibir e ocultar submenu ao clicar
    categoriasToggle.addEventListener("click", function (event) {
        event.preventDefault();
        submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    });

    // Fechar o submenu ao clicar fora dele
    document.addEventListener("click", function (event) {
        if (!categoriasToggle.contains(event.target) && !submenu.contains(event.target)) {
            submenu.style.display = "none";
        }
    });
});


// CARROSSEL DAS NOVIDADES

document.addEventListener("DOMContentLoaded", function () {
    const imagem = document.getElementById("imagem-novidade");
    const imagens = [
        "Produtos/Novidade/Frasco Frutas Vermelhas (sem fundo).png",
        "Produtos/Novidade/Frasco Guaraná (sem fundo).png"
    ];
    let index = 0;

    setInterval(() => {
        imagem.style.opacity = 0; // Adiciona efeito de fade-out
        setTimeout(() => {
            index = (index + 1) % imagens.length;
            imagem.src = imagens[index];
            imagem.style.opacity = 1; // Adiciona efeito de fade-in
        }, 500); // Tempo da transição
    }, 3000); // Alterna a cada 3 segundos
});



