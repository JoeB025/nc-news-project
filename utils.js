import axios from 'axios';

const planetApi = axios.create({
  baseURL: "",
});


export function getArticles() {
  return articlesApi.get();
}
