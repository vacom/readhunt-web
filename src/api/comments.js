//Utils
import { apiUrl } from "../utils/Constants";
/**
 * COMMENTS API ENDPOINTS
 */

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
const getCommentsCountbyArticle = async (id) => {
  const res = await fetch(`${apiUrl}/comments/count/${id}`);
  const data = await res.json();
  return data;
};

export { getCommentsbyArticle, getCommentbyId, getCommentsCountbyArticle };
