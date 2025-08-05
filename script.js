// script.js

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-pt]').forEach(el => {
    el.textContent = lang === 'pt' ? el.getAttribute('data-pt') : el.getAttribute('data-en');
  });

  // Atualizar atributos dos links no menu
  document.querySelectorAll('nav a').forEach(link => {
    link.textContent = lang === 'pt' ? link.getAttribute('data-pt') : link.getAttribute('data-en');
  });

  // Atualizar footer
  const footer = document.querySelector('footer p');
  if (footer) {
    footer.textContent = lang === 'pt'
      ? footer.getAttribute('data-pt')
      : footer.getAttribute('data-en');
  }
}
