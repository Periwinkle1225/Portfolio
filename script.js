const toggleButton = document.getElementById('mode-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const isDark = document.body.classList.contains('dark-mode');
  toggleButton.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});

