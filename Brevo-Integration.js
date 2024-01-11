let inputConfig = input.config();

fetch('https://api.brevo.com/v3/smtp/email', {
  method: 'POST',
  headers: {
    'accept': 'application/json',
    'api-key': 'your-api-key',
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    'sender': {
      'name': 'Ahmet Kök',
      'email': 'ahmet@nocodecampus.com.tr'
    },
    'to': [
      {
        'email': inputConfig.email,
        'name': inputConfig.name
      }
    ],
    'subject': 'Hello world',
    'htmlContent': '<html><head></head><body><p>Hello,</p>Hi ' + inputConfig.name + ', This is my first transactional email sent from Brevo.</p></body></html>'
  })
}).then(r => output.set("status", r.status));
