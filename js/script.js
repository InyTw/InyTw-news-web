// 主題切換
const themeToggle = document.getElementById('theme-toggle');

// 讀取儲存主題
if(localStorage.getItem('theme') === 'light') {
  document.body.style.setProperty('--bg-dark', '#f5f5f5');
  document.body.style.setProperty('--card-dark', '#ffffff');
  document.body.style.setProperty('--text-dark', '#111827');
} else {
  document.body.style.setProperty('--bg-dark', '#0d1117');
  document.body.style.setProperty('--card-dark', 'rgba(20,25,35,0.85)');
  document.body.style.setProperty('--text-dark', '#cdd9f4');
}

themeToggle.addEventListener('click', () => {
  const current = localStorage.getItem('theme') || 'dark';
  if(current === 'dark') {
    // 切換淺色
    document.body.style.setProperty('--bg-dark', '#f5f5f5');
    document.body.style.setProperty('--card-dark', '#ffffff');
    document.body.style.setProperty('--text-dark', '#111827');
    localStorage.setItem('theme', 'light');
  } else {
    // 切換深色
    document.body.style.setProperty('--bg-dark', '#0d1117');
    document.body.style.setProperty('--card-dark', 'rgba(20,25,35,0.85)');
    document.body.style.setProperty('--text-dark', '#cdd9f4');
    localStorage.setItem('theme', 'dark');
  }
});

// 已有主題切換代碼保持不變
// 可加動畫控制，例如 iframe 先淡入
window.addEventListener('DOMContentLoaded', () => {
  const contrib = document.getElementById('gh-contrib');
  contrib.style.opacity = 0;
  setTimeout(() => {
    contrib.style.transition = 'opacity 1s';
    contrib.style.opacity = 1;
  }, 300);
});
