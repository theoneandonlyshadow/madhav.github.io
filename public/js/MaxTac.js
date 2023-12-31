/*const { Webhook, MessageBuilder } = require('discord-webhook-node');
const hook = new Webhook("https://discord.com/api/webhooks/1185482566694862919/MJSdMZnTnAVKeGUQxZjFVxypSWV5pqt0GuuBkH3-ST-EfyZ6DYa4ABDUSgKEjHhqVVZL");

// Function to submit the form data
function submitForm() {
  const formData = {
    name: document.getElementById('name').value,
    companyName: document.getElementById('companyName').value,
    emailAddress: document.getElementById('emailAddress').value,
    stipend: document.getElementById('stipend').value,
    role: document.getElementById('role').value,
    message: document.getElementById('message').value
  };

  // Create a Discord embed with the form data
  const embed = new MessageBuilder()
    .setTitle('Internship Application')
    .addField('Name', formData.name)
    .addField('Company Name', formData.companyName)
    .addField('Email Address', formData.emailAddress)
    .addField('Stipend per month', formData.stipend)
    .addField('Role', formData.role)
    .addField('Message', formData.message)
    .setColor('#00b0f4')
    .setTimestamp();

  // Send the embed to the Discord webhook
  hook.send(embed);

  // Optionally, you can provide user feedback or perform other actions
  alert('Thank you for submitting the form!');
}
