//Utils
import { apiUrl } from "../utils/Constants";
import { _token } from "../utils/Utils";
/**
 * VOTES API ENDPOINTS
 */

//get the list of votes for the article by id
const getVotesbyArticle = async articleId => {
  const res = await fetch(`${apiUrl}/votes/${articleId}`);
  const data = await res.json();
  return data;
};

//Collects a vote by is ID
const getVotebyId = async voteId => {
  const res = await fetch(`${apiUrl}/vote/${voteId}`);
  const data = await res.json();
  return data;
};

//Total number of votes for that article
const getVotesCountbyArticle = async articleId => {
  const res = await fetch(`${apiUrl}/votes/count/${articleId}`);
  const data = await res.json();
  return data;
};

//POSTS

//Creates a new vote for the article
const voteArticlebyId = async (voted, user_id, article_id) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${_token()}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      voted,
      user_id,
      article_id
    })
  };
  const res = await fetch(`${apiUrl}/vote`, options);
  const data = await res.json();
  return data;
};

//Creates a new comment to the article
const deleteAllVotesByArticleId = async article_id => {
  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${_token()}`,
      "Content-Type": "application/json"
    }
  };
  const res = await fetch(`${apiUrl}/vote/all/${article_id}`, options);
  const data = await res.json();
  return data;
};

export {
  getVotesbyArticle,
  getVotebyId,
  getVotesCountbyArticle,
  voteArticlebyId,
  deleteAllVotesByArticleId
};
