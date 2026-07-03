// Cyberpunk Particle Background
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Cyberpunk neon colors
const neonColors = [
    '#00ff00', // Neon Green
    '#00ffff', // Cyan
    '#ff00ff', // Magenta
    '#ff0080', // Hot Pink
    '#0080ff', // Electric Blue
    '#ffff00', // Neon Yellow
    '#ff6600', // Neon Orange
];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        this.color = neonColors[Math.floor(Math.random() * neonColors.length)];
        this.opacity = Math.random() * 0.5 + 0.3;
        this.lifespan = Math.random() * 100 + 50;
        this.age = 0;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.age++;

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        // Fade out effect
        this.opacity = Math.sin((this.age / this.lifespan) * Math.PI) * (Math.random() * 0.5 + 0.3);
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

// Create particles array
let particles = [];
const particleCount = 80;

// Initialize particles
for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

// Draw connecting lines
function drawConnections() {
    ctx.globalAlpha = 0.1;
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.strokeStyle = particles[i].color;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    ctx.globalAlpha = 1;
}

// Animation loop
function animate() {
    // Clear canvas with fade effect
    ctx.fillStyle = 'rgba(254, 250, 224, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Respawn particles that are too old
        if (particles[i].age > particles[i].lifespan) {
            particles[i] = new Particle();
        }
    }

    // Draw connections
    drawConnections();

    requestAnimationFrame(animate);
}

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Start animation
animate();
