import axios from 'axios';

const articlesApi = axios.create({
  baseURL: "https://nc-news-gjgw.onrender.com/api/articles",
});


export function getArticles() {
  return articlesApi.get();
}
