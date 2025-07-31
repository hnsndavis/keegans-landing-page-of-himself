// Typewriter effect for the command
const typewriter = document.getElementById('typewriter');
const cursor = document.querySelector('.cursor');
const output = document.getElementById('output');

// Role cycling animation
const roles = document.querySelectorAll('.role');
let currentRoleIndex = 0;

function cycleRoles() {
    roles.forEach(role => role.classList.remove('active'));
    roles[currentRoleIndex].classList.add('active');
    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
}

// Start role cycling after initial load
setTimeout(() => {
    setInterval(cycleRoles, 2000);
}, 1000);

// Show output after typewriter effect
setTimeout(() => {
    output.style.opacity = '1';
    cursor.style.display = 'none';
}, 1500);

// Modal functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
const actionItems = document.querySelectorAll('.action-item');

// Modal content data
const modalContent = {
    newsletter: {
        title: 'Notes from Keegan',
        body: `
            <p>Weekly newsletter helping builders, dreamers, and ordinary people move from stuck to doing the thing.</p>
            <br>
            <p>Each week, I share honest stories, practical lessons, and real encouragement for doers who want to make something happen.</p>
            <br>
            <p><strong>Recent issues:</strong></p>
            <ul>
                <li>"Welcome to the Messy Middle"</li>
                <li>"Are You a Sheep or a Donkey?"</li>
                <li>"The Art of Starting Before You're Ready"</li>
            </ul>
            <br>
            <p>
                <a href="https://keeganhansendavis.substack.com" target="_blank">Subscribe on Substack →</a>
            </p>
        `
    },
    writing: {
        title: 'Recent Thoughts',
        body: `
            <p>Essays and explorations on building, creating, and becoming.</p>
            <br>
            <p><strong>Recent writings:</strong></p>
            <ul>
                <li>On moving from idea to execution</li>
                <li>The philosophy of minimalist design</li>
                <li>Why most people never start</li>
                <li>Building in public vs. private</li>
            </ul>
            <br>
            <p>
                <a href="https://keeganhansendavis.substack.com" target="_blank">Read on Substack →</a>
            </p>
        `
    },
    connect: {
        title: 'Connect',
        body: `
            <p>Let's build something together.</p>
            <br>
            <p><strong>Get in touch:</strong></p>
            <ul>
                <li><a href="mailto:hello@keeganhansendavis.com">Email</a></li>
                <li><a href="https://www.linkedin.com/in/keegan-hansen-davis/" target="_blank">LinkedIn</a></li>
                <li><a href="https://twitter.com/keeganhd" target="_blank">Twitter</a></li>
                <li><a href="https://instagram.com/keeganhansendavis" target="_blank">Instagram</a></li>
            </ul>
            <br>
            <p>Always open to connecting with other builders, writers, and people doing interesting things.</p>
        `
    },
    work: {
        title: 'Current Work',
        body: `
            <p>What I'm building and collaborating on right now.</p>
            <br>
            <p><strong>Active projects:</strong></p>
            <ul>
                <li>Weekly newsletter "Notes from Keegan"</li>
                <li>Freelance design & strategy consulting</li>
                <li>Writing on minimalism and intentional living</li>
                <li>Community building initiatives</li>
            </ul>
            <br>
            <p><strong>Collaboration interests:</strong></p>
            <ul>
                <li>Minimalist design projects</li>
                <li>Content strategy & writing</li>
                <li>Community-focused initiatives</li>
                <li>Purpose-driven ventures</li>
            </ul>
            <br>
            <p>Open to new opportunities and interesting conversations.</p>
        `
    }
};

// Action item click handlers
actionItems.forEach(item => {
    item.addEventListener('click', () => {
        const action = item.getAttribute('data-action');
        const content = modalContent[action];
        
        if (content) {
            modalTitle.textContent = content.title;
            modalBody.innerHTML = content.body;
            modal.style.display = 'block';
            
            // Add terminal-style animation to modal
            setTimeout(() => {
                modal.querySelector('.modal-content').style.animation = 'fadeInUp 0.3s ease-out';
            }, 10);
        }
    });
    
    // Add hover sound effect simulation
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(8px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
    });
});

// Modal close handlers
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.style.display = 'none';
    }
    
    // Terminal-style keyboard shortcuts
    if (e.key === '1') actionItems[0].click();
    if (e.key === '2') actionItems[1].click();
    if (e.key === '3') actionItems[2].click();
    if (e.key === '4') actionItems[3].click();
});

// Add subtle parallax effect to terminal
document.addEventListener('mousemove', (e) => {
    const terminal = document.querySelector('.terminal');
    const x = (e.clientX / window.innerWidth) * 10;
    const y = (e.clientY / window.innerHeight) * 10;
    
    terminal.style.transform = `translate(${x}px, ${y}px)`;
});

// Add matrix-style background effect (subtle)
function createMatrixEffect() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.03';
    canvas.style.pointerEvents = 'none';
    
    document.body.appendChild(canvas);
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff00';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 100);
}

// Initialize matrix effect after page load
setTimeout(createMatrixEffect, 2000);