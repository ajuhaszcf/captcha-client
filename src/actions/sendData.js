export default function sendData(data) {
  return fetch('http://localhost:3001/captcha/attempt', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  })
  .then(response => response.json());
}
