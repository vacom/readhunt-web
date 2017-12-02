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
const createArticle = async ({
  title,
  tagline,
  thumbnail_url,
  link,
  description,
  cover_url,
  user_id,
  category_id
}) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${_token()}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title,
      tagline,
      thumbnail_url,
      link,
      description,
      cover_url,
      user_id,
      category_id
    })
  };
  const res = await fetch(`${apiUrl}/article`, options);
  const data = await res.json();
  return data;
};

//Update the article by id
const updateArticle = async ({
  title,
  tagline,
  thumbnail_url,
  link,
  description,
  cover_url,
  user_id,
  category_id,
  article_id
}) => {
  const options = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${_token()}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title,
      tagline,
      thumbnail_url,
      link,
      description,
      cover_url,
      user_id,
      category_id
    })
  };
  const res = await fetch(`${apiUrl}/article/${article_id}`, options);
  const data = await res.json();
  return data;
};

//Deletes the Article by id
const deleteArticlebyId = async article_id => {
  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${_token()}`,
      "Content-Type": "application/json"
    }
  };
  const res = await fetch(`${apiUrl}/article/${article_id}`, options);
  const data = await res.json();
  return data;
};

export {
  getArticles,
  getArticle,
  getArticlesByCategory,
  createArticle,
  updateArticle,
  deleteArticlebyId
};
