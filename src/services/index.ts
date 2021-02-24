import axios from 'axios'

export const contactSend = axios.create({
  baseURL: 'https://webhook.site/71396fef-2b6e-4133-86b1-db2888eff7f9'
});

export const getData = axios.create({
  baseURL: 'https://accenture-server-rn.herokuapp.com/'
});
