const themeToggle = document.getElementById('theme-toggle');

// 初始化主題
if(localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
} else {
  document.body.classList.remove('light');
}

// 點擊切換主題
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  if(document.body.classList.contains('light')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
});
