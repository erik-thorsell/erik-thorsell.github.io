document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
  
    const particleSize = 2;
  
    let mouseX;
    let mouseY;
  
    const particles = [];
  
    function spawnParticle() {
      const yn = Math.random();
      if (yn < 0.02) {
        const particle = {
          x: Math.random() * canvas.width,
          y: 0,
          speed: Math.random() * 1 + 0.3,
          canvasElement: document.createElement('canvas'),
        };
        particle.canvasElement.width = particleSize * 2;
        particle.canvasElement.height = particleSize * 2;
        const particleCtx = particle.canvasElement.getContext('2d');
        particleCtx.beginPath();
        particleCtx.arc(particleSize, particleSize, particleSize, 0, 2 * Math.PI);
        particleCtx.fillStyle = 'white';
        particleCtx.fill();
        particles.push(particle);
      }
    }
  
    function updateParticles() {
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        particle.y += particle.speed;
        if (particle.y > canvas.height) {
          particles.splice(i, 1);
          i--;
        }
      }
    }
  
    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const particle of particles) {
        ctx.drawImage(particle.canvasElement, particle.x - particleSize, particle.y - particleSize);
      }
    }
  
    function animate() {
      spawnParticle();
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    }
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  

    animate();
  });
  