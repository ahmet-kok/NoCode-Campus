const inputConfig = input.config();

const url = 'https://api.resend.com/emails';

const data = `{
    "from": "onboarding@ahmetkok.dev",
    "to": "${inputConfig.email}",
    "subject": "Hello World",
    "html": "<strong>it works with NoCode Campus!</strong>"
  }`;

const response = await fetch(url, {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer your-api-token',
        'Content-Type': 'application/json',
    },
    body: data,
});

const text = await response.json();

console.log(text);
