// 主題切換按鈕
const themeToggle = document.getElementById('theme-toggle');

// 檢查使用者是否已有主題設定
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

// 點擊切換主題
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
