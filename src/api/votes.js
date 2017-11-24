//Utils
import { apiUrl } from "../utils/Constants";
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

export { getVotesbyArticle, getVotebyId, getVotesCountbyArticle };
