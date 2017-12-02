//Utils
import { apiUrl } from "../utils/Constants";
import { _token } from "../utils/Utils";
/**
 * ARTICLES API ENDPOINTS
 */

//GETS

//Gets all the articles from DB
const getArticles = async () => {
  const res = await fetch(`${apiUrl}/articles`);
  const data = await res.json();
  return data;
};

const getArticlesByCategory = async id => {
  const res = await fetch(`${apiUrl}/articles/category/${id}`);
  const data = await res.json();
  return data;
};

//Get article information by id
const getArticle = async id => {
  const res = await fetch(`${apiUrl}/article/${id}`);
  const data = await res.json();
  return data;
};

//POSTS

//Creates a new article in the DB
const createArticle = async () => {
  /*const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${_token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "hey",
    })
  };
  const res = await fetch(`${apiUrl}/article`, options);
  console.log(res);
  const data = await res.json();
  return data;*/

  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${_token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "hey"
    }),
  };
  fetch(`${apiUrl}/article`, options)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(e => {
      console.error(e);
    });
};

export { getArticles, getArticle, getArticlesByCategory, createArticle };
