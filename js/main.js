function updateDateTime() {
  const h1 = document.getElementById('welcome');
  const now = new Date();

  // 格式化日期與時間
  const options = { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  };
  const formatted = now.toLocaleDateString('en-US', options);

  h1.textContent = `👋 Today is ${formatted}`;
}

// 每秒更新一次
setInterval(updateDateTime, 1000);

// 頁面載入時立即執行一次
updateDateTime();
