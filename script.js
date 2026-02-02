document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    const clickCounter = document.getElementById('click-counter');
    const colorBtn = document.getElementById('color-btn');
    
    let clickCount = 0;
    
    // Gradient color options
    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        'linear-gradient(135deg, #7f7fd5 0%, #86a8e7 50%, #91eae4 100%)'
    ];
    
    let currentGradient = 0;
    
    // Click on heading for pulse effect and counter
    heading.addEventListener('click', (e) => {
        clickCount++;
        clickCounter.textContent = `Clicks: ${clickCount}`;
        
        // Add pulse animation
        heading.classList.add('click-effect');
        setTimeout(() => {
            heading.classList.remove('click-effect');
        }, 500);
        
        // Create particles on click
        createParticles(e.clientX, e.clientY);
    });
    
    // Change background gradient
    colorBtn.addEventListener('click', () => {
        currentGradient = (currentGradient + 1) % gradients.length;
        document.body.style.background = gradients[currentGradient];
    });
    
    // Create floating particles effect
    function createParticles(x, y) {
        const colors = ['#fff', '#ffd700', '#ff69b4', '#00ff7f', '#87ceeb'];
        
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 10 + 5;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const offsetX = (Math.random() - 0.5) * 100;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = color;
            particle.style.left = `${x + offsetX}px`;
            particle.style.top = `${y}px`;
            
            document.body.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, 2000);
        }
    }
    
    // Add keyboard interaction
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            colorBtn.click();
        }
    });
    
    console.log('🎉 Hello World page loaded! Click the heading or press Space to interact.');
});
