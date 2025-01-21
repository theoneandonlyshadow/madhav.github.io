const express = require('express');
const path = require('path');
const { Webhook } = require('discord-webhook-node');
const axios = require('axios');

let init_path = path.join(__dirname, "");

const app = express();
app.use(express.static(init_path));

const hook = new Webhook("https://discord.com/api/webhooks/1185482566694862919/MJSdMZnTnAVKeGUQxZjFVxypSWV5pqt0GuuBkH3-ST-EfyZ6DYa4ABDUSgKEjHhqVVZL");

app.get('/', async (req, res) => {
  res.sendFile(path.join(init_path, "index.html"));
});


app.listen("8080", () => {
    console.log('portfolio is connected :: http://localhost:8080');
})


function submitForm() {
  var request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1185482566694862919/MJSdMZnTnAVKeGUQxZjFVxypSWV5pqt0GuuBkH3-ST-EfyZ6DYa4ABDUSgKEjHhqVVZL");

  request.setRequestHeader('Content-type', 'application/json');

const formData = {
  name: document.getElementById('name').value,
  companyName: document.getElementById('companyName').value,
  emailAddress: document.getElementById('emailAddress').value,
  stipend: document.getElementById('stipend').value,
  role: document.getElementById('role').value,
  message: document.getElementById('message').value
};

  var params = {
    username: "Internship Request",
    avatar_url: "http://i.ytimg.com/vi/dXyzySHX4h8/maxresdefault.jpg",
    content: `Name: ${formData.name} \n Company Name: ${formData.companyName} \n Email: ${formData.emailAddress} \n Stipend: ${formData.stipend} \n Role: ${formData.role} \n Message: ${formData.message} \n`
  }

  request.send(JSON.stringify(params));
}

