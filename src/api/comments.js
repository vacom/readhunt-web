//Utils
import { apiUrl } from "../utils/Constants";
import { _token } from "../utils/Utils";
/**
 * COMMENTS API ENDPOINTS
 */

//GETS

//gets all the comments by the article ID
const getCommentsbyArticle = async id => {
  const res = await fetch(`${apiUrl}/comments/${id}`);
  const data = await res.json();
  return data;
};

//Gets comment by ID
const getCommentbyId = async id => {
  const res = await fetch(`${apiUrl}/comment/${id}`);
  const data = await res.json();
  return data;
};

//The total number of comments for that article
const getCommentsCountbyArticle = async id => {
  const res = await fetch(`${apiUrl}/comments/count/${id}`);
  const data = await res.json();
  return data;
};

//POSTS

//Creates a new comment to the article
const storeCommentByArticleId = async (content, user_id, article_id) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${_token()}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content,
      user_id,
      article_id
    })
  };
  const res = await fetch(`${apiUrl}/comment`, options);
  const data = await res.json();
  return data;
};


export {
  getCommentsbyArticle,
  getCommentbyId,
  getCommentsCountbyArticle,
  storeCommentByArticleId
};
