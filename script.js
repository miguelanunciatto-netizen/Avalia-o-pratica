// 1. ALTERNÂNCIA DE TEMA (CLARO / ESCURO)
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

// Verificar preferência salva no LocalStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  const isDark = document.body.classList.contains('dark-theme');
  
  // Trocar ícone sol/lua
  if (isDark) {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  }
});

// 2. FUNCIONALIDADE DO BOTÃO DE CURTIR
function curtirPost(button) {
  const icon = button.querySelector('i');
  const countSpan = button.querySelector('.likes-count');
  let currentLikes = parseInt(countSpan.textContent);

  if (button.classList.contains('liked')) {
    // Descurtir
    button.classList.remove('liked');
    icon.classList.replace('fa-solid', 'fa-regular');
    countSpan.textContent = currentLikes - 1;
  } else {
    // Curtir
    button.classList.add('liked');
    icon.classList.replace('fa-regular', 'fa-solid');
    countSpan.textContent = currentLikes + 1;
  }
}

// 3. ALERTAS DE INTERAÇÃO DOS BOTÕES
function mostrarAlerta(mensagem) {
  alert(mensagem);
}

function inscreverLembrete() {
  alert('🔔 Lembrete ativado! Notificaremos você 15 minutos antes do início do jogo.');
}