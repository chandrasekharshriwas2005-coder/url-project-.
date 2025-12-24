// Simple login simulation with UI state toggle
const loginForm = document.getElementById('loginForm');
const loginCard = document.querySelector('.login-card');
const appContent = document.querySelector('.app-content');

// Toggle password visibility
const togglePassword = document.getElementById('togglePassword');
if (togglePassword && document.getElementById('password')) {
  togglePassword.addEventListener('click', function() {
    const pw = document.getElementById('password');
    pw.type = pw.type === 'password' ? 'text' : 'password';
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate login successful
    loginCard.style.display = 'none';
    appContent.style.display = 'block';
  });
}

