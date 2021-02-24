import axios from 'axios'

export const contactSend = axios.create({
  baseURL: 'https://webhook.site/3c457b89-c79a-46c0-8135-ea6f3d09307a'
});

export const getData = axios.create({
  baseURL: 'https://accenture-server-rn.herokuapp.com/'
});
