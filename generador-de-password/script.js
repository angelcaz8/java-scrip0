// Configuración de caracteres
const characters = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

// Cargar configuración guardada
function loadSettings() {
    const savedSettings = localStorage.getItem('passwordSettings');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        document.getElementById('password-length').value = settings.length;
        document.getElementById('uppercase').checked = settings.uppercase;
        document.getElementById('lowercase').checked = settings.lowercase;
        document.getElementById('numbers').checked = settings.numbers;
        document.getElementById('symbols').checked = settings.symbols;
        updateLengthDisplay();
    }
}

// Generar contraseña
function generatePassword() {
    const length = document.getElementById('password-length').value;
    const options = {
        uppercase: document.getElementById('uppercase').checked,
        lowercase: document.getElementById('lowercase').checked,
        numbers: document.getElementById('numbers').checked,
        symbols: document.getElementById('symbols').checked
    };

    // Validar opciones
    if (!Object.values(options).some(v => v)) {
        alert('¡Selecciona al menos un tipo de carácter!');
        return;
    }

    // Crear conjunto de caracteres
    let charset = '';
    Object.keys(options).forEach(key => {
        if (options[key]) charset += characters[key];
    });

    // Generar contraseña aleatoria
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    // Actualizar UI
    document.getElementById('password-output').textContent = password;
    updateStrengthIndicator(password);
    saveSettings(length, options);
}

// Calcular fortaleza
function updateStrengthIndicator(password) {
    const strength = calculateStrength(password);
    const bar = document.getElementById('strength-bar');
    const text = document.getElementById('strength-text');
    
    bar.style.backgroundColor = strength.color;
    text.textContent = strength.text;
    text.style.color = strength.color;
}

function calculateStrength(password) {
    let score = 0;
    score += password.length * 3; // +3 puntos por carácter
    
    if (/[A-Z]/.test(password)) score += 10; // Mayúsculas
    if (/[a-z]/.test(password)) score += 10; // Minúsculas
    if (/[0-9]/.test(password)) score += 10; // Números
    if (/[^A-Za-z0-9]/.test(password)) score += 15; // Símbolos

    if (score > 80) return { text: 'FUERTE', color: '#4CAF50' };
    if (score > 50) return { text: 'MEDIO', color: '#FFC107' };
    return { text: 'DÉBIL', color: '#F44336' };
}

// Utilidades
function updateLengthDisplay() {
    document.getElementById('length-value').textContent = 
        document.getElementById('password-length').value;
}

function copyPassword() {
    const password = document.getElementById('password-output').textContent;
    navigator.clipboard.writeText(password);
    alert('✅ Contraseña copiada al portapapeles');
}

function saveSettings(length, options) {
    const settings = { length, ...options };
    localStorage.setItem('passwordSettings', JSON.stringify(settings));
}

// Event Listeners
document.getElementById('password-length').addEventListener('input', updateLengthDisplay);
document.addEventListener('DOMContentLoaded', loadSettings);