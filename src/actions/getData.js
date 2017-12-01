export default function getData(options) {
  return fetch(`/captcha?${Object.keys(options).map(key => `${key}=${options[key]}`).join('&')}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  })
  .then(response => response.json());
}
