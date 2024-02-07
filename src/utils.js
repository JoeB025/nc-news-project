import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://nc-news-gjgw.onrender.com",
});

export function getArticles() {
  return articlesApi.get("/api/articles");
}

export function getArticlesById(article_id) {
  return articlesApi.get(`/api/articles/${article_id}`);
}

export function getArticleComments(article_id) {
  return articlesApi.get(`/api/articles/${article_id}/comments`);
}

export function updateVotes(article_id) {
  return articlesApi.patch(`/api/articles/${article_id}`, {inc_votes: 1});
}




// app.get('/api/topics', getTopics); // gets the topics data

// app.get('/api', getAllData); // gets all the data

// app.get('/api/articles/:article_id', getArticles) // gets the app by ID

// app.get('/api/articles', getOrderedArticles) // gets articles in an ordered format

// app.get('/api/articles/:article_id/comments', getArticleComments);

// app.post('/api/articles/:article_id/comments', insertComments);

// app.patch('/api/articles/:article_id', replaceComments);

// app.delete('/api/comments/:comment_id', deleteComments);

// app.get('/api/users', getUsers);
