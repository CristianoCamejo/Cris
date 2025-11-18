// script.js

// A função changeLanguage assume que o objeto 'translations' foi carregado
// a partir do arquivo translations.js

window.changeLanguage = function(lang) {
    // 1. Atualiza o atributo lang da página para fins de SEO/Acessibilidade
    document.documentElement.lang = lang;

    // 2. Itera e atualiza todos os elementos com chave de tradução
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        
        // Verifica se a chave existe para o idioma selecionado
        if (translations[lang] && translations[lang][key] !== undefined) {
            const translation = translations[lang][key];

            if (key === 'page_title') {
                // Caso especial: atualiza a tag <title>
                document.title = translation;
            } else if (Array.isArray(translation)) {
                // Trata listas (Conteúdo Programático)
                element.innerHTML = translation.map(item => `<li>${item}</li>`).join('');
            } else {
                // Trata texto normal, incluindo tags HTML/Markdown (ex: <b>, **)
                element.innerHTML = translation;
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializa o idioma para Português (pt) ao carregar a página
    changeLanguage('pt');

    // 2. Lógica do menu responsivo (Hamburguer)
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mainNav = document.getElementById('main-nav');

    const toggleMenu = () => {
        mainNav.classList.toggle('open');
    };

    menuToggle.addEventListener('click', toggleMenu);
    menuClose.addEventListener('click', toggleMenu);

    // Fecha o menu ao clicar em um link (melhorando a UX mobile)
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('open')) {
                mainNav.classList.remove('open');
            }
        });
    });
});

