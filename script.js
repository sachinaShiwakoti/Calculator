const screen = document.getElementById('screen');
const keys = document.querySelectorAll('.key');
const themeToggle = document.getElementById('themeToggle');

keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyValue = key.value;
        
        if (keyValue === 'C') {
            screen.value = '';
        } else if (keyValue === '=') {
            try {
                screen.value = eval(screen.value.replace(/×/g, '*').replace(/÷/g, '/'));
            } catch {
                screen.value = 'Error';
            }
        } else if (keyValue === '√') {
            screen.value = Math.sqrt(parseFloat(screen.value));
        } else if (keyValue === '^') {
            screen.value = Math.pow(parseFloat(screen.value), 2);
        } else if (keyValue === '%') {
            screen.value = parseFloat(screen.value) / 100;
        } else {
            screen.value += keyValue;
        }
    });
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeToggle.textContent = document.body.classList.contains('light-theme') ? '🌙' : '🌞';
});
