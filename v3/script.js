// script.js

// O objeto 'translations' é carregado do arquivo translations.js

window.changeLanguage = function(lang) {
    // 1. Atualiza o atributo lang da página para fins de acessibilidade/SEO
    document.documentElement.lang = lang;

    // 1.1. Atualiza o TÍTULO da página separadamente
    if (translations[lang] && translations[lang]['page_title']) {
        document.title = translations[lang]['page_title'];
    }

    // 2. Itera e atualiza todos os elementos com chave de tradução
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        
        // Evita tentar traduzir o título novamente
        if (key === 'page_title') return; 

        // Verifica se a chave existe para o idioma selecionado
        if (translations[lang] && translations[lang][key] !== undefined) {
            const translation = translations[lang][key];

            if (Array.isArray(translation)) {
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
    // Inicializa o idioma para Português (pt) ao carregar a página
    changeLanguage('pt');

    // Lógica do menu responsivo (Hamburguer)
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mainNav = document.getElementById('main-nav');

    const toggleMenu = () => {
        mainNav.classList.toggle('open');
    };

    menuToggle.addEventListener('click', toggleMenu);
    menuClose.addEventListener('click', toggleMenu);

    // Fecha o menu ao clicar em um link
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('open')) {
                mainNav.classList.remove('open');
            }
        });
    });
});

