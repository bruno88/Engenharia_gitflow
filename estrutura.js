function carregarCabecalho() {
    const cabecalho = `
    <header class="header">
        <div class="header-logo">
            <img src="https://i.ibb.co/ksct2TCF/logomarca.png" alt="Logo da empresa">
        </div>
        <div class="menu-toggle" onclick="toggleMenu()">☰</div>
        <div class="header-menu">
            <ul>
                <li><a href="/index.html">Início</a></li>
                <li><a href="/eventos.html">Eventos</a></li>
                <li><a href="/form_cadastro_evento.html">Cadastrar evento</a></li>
                <li><a href="/index.html#sobre-nos">Sobre nós</a></li>
            </ul>
        </div>
    </header>`;

    const main = document.querySelector("main");
    if (main) {
        main.insertAdjacentHTML("beforebegin", cabecalho);
    };
};

function toggleMenu() {
    document.body.classList.toggle("menu-active");
};

function carregarRodape() {
    const rodape = `
    <footer class="footer">
        <div class="footer-logo">
            <img src="https://i.ibb.co/ksct2TCF/logomarca.png" alt="Logo da empresa">
        </div>
        <p class="footer-slogan">
            Conectando pessoas e eventos com inovação e confiança.
        </p>
        <div class="footer-contact">
            <p>Email: prime.eventos@gmail.com</p>
            <p>Telefone: +55 (11) 98765-4321</p>
        </div>
        <div class="footer-social">
            <a href="#" class="fab-facebook" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
            <a href="#" class="fab-instagram" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" class="fab-twitter" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="#" class="fab-youtube" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            <a href="#" class="fab-whatsapp" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
        </div>
        <div class="footer-copyright">
            <p>&copy; <span id="year"></span>. Todos os direitos reservados.</p>
        </div>
    </footer>`;

    const main = document.querySelector("main");
    if (main) {
        main.insertAdjacentHTML("afterend", rodape);
    };

    // Atualiza o ano automaticamente
    document.getElementById("year").textContent = new Date().getFullYear();
};


// Chama as funções ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    carregarCabecalho();
    carregarRodape();
});