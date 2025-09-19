const body = document.body;
const themeBtn = document.getElementById('themeBtn');
const accentBtn = document.getElementById('accentBtn');


function setTheme(t){
body.setAttribute('data-theme',t);
localStorage.setItem('site-theme',t);
}


document.querySelectorAll('button[data-theme]').forEach(b=>
b.addEventListener('click',()=>setTheme(b.getAttribute('data-theme')))
);


themeBtn.addEventListener('click',()=>{
const next = body.getAttribute('data-theme')==='dark' ? 'light' : 'dark';
setTheme(next);
});


accentBtn.addEventListener('click',()=>{
const hue = Math.floor(Math.random()*360);
document.documentElement.style.setProperty('--accent', `hsl(${hue} 90% 60%)`);
localStorage.setItem('site-accent', hue);
});


// load saved theme
const saved = localStorage.getItem('site-theme');
if(saved) body.setAttribute('data-theme', saved);
const savedAccent = localStorage.getItem('site-accent');
if(savedAccent) document.documentElement.style.setProperty('--accent', `hsl(${savedAccent} 90% 60%)`);


// --- News manager (localStorage demo) ---
const form = document.getElementById('newsForm');
const newsList = document.getElementById('newsList');
const newsKey = 'iny_news_v1';


function renderNews(){
const items = JSON.parse(localStorage.getItem(newsKey) || '[]').reverse();
newsList.innerHTML = '';
if(items.length===0){
newsList.innerHTML = '<div style="color:var(--muted)">No news yet — add one above.</div>';
return;
}
items.forEach(it=>{
const el = document.createElement('div');
el.className='news-item';
el.innerHTML = `<strong>${escapeHtml(it.title)}</strong><div style="font-size:13px;color:var(--muted);margin-top:6px">${new Date(it.date).toLocaleString()}</div>`;
newsList.appendChild(el);
})
}


form.addEventListener('submit',e=>{
e.preventDefault();
const title = document.getElementById('newsTitle').value.trim();
if(!title) return;
const arr = JSON.parse(localStorage.getItem(newsKey) || '[]');
arr.push({title, date: Date.now()});
localStorage.setItem(newsKey, JSON.stringify(arr));
document.getElementById('newsTitle').value='';
renderNews();
});


function escapeHtml(s){
return s.replace(/[&<>\"'`]/g,c=>({
"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;","`":"&#96;"
}[c]))
}


renderNews();


// --- Simple hash-routing for nav ---
function gotoHash(){
const h = location.hash || '#home';
const el = document.querySelector(h);
if(el) el.scrollIntoView({behavior:'smooth'});
}
window.addEventListener('hashchange', gotoHash);
gotoHash();