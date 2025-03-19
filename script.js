function toggleForm(formType) {
    document.querySelectorAll('.form-section').forEach(form => form.classList.remove('active'));
    document.getElementById(formType).classList.add('active');
}

function startTimer() {
    var timerElement = document.getElementById('timer');
    var button = document.getElementById('send-code-btn');
    var timeLeft = 60;

    button.disabled = true;

    var interval = setInterval(function() {
        timeLeft--;
        timerElement.textContent = `Час залишився: ${timeLeft} секунд`;

        if (timeLeft <= 0) {
            clearInterval(interval);
            button.disabled = false;
            timerElement.textContent = 'Код відправлено!';
        }
    }, 1000);
}

// Initialize the login form when the login page loads
if (window.location.pathname.includes('login.html')) {
    document.addEventListener('DOMContentLoaded', function () {
        toggleForm('login-form');
    });
}