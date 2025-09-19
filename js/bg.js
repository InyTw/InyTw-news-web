const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const particles = [];
const PARTICLE_COUNT = 80;

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
    if(this.x < 0 || this.x > width) this.vx *= -1;
    if(this.y < 0 || this.y > height) this.vy *= -1;
  }
  draw() {
    ctx.fillStyle = '#4f46e5';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fill();
  }
}

function initParticles() {
  for(let i=0;i<PARTICLE_COUNT;i++){
    particles.push(new Particle());
  }
}

function connectParticles() {
  for(let i=0;i<particles.length;i++){
    for(let j=i+1;j<particles.length;j++){
      let dx = particles[i].x - particles[j].x;
      let dy = particles[i].y - particles[j].y;
      let dist = Math.sqrt(dx*dx + dy*dy);
      if(dist < 120){
        ctx.strokeStyle = 'rgba(79,70,229,' + (1 - dist/120) + ')';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0,0,width,height);
  particles.forEach(p => {
    p.move();
    p.draw();
  });
  connectParticles();
  requestAnimationFrame(animate);
}

window.addEventListener('resize', ()=>{
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

initParticles();
animate();

