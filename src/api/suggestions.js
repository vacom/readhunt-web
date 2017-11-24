//Utils
import { apiUrl } from "../utils/Constants";
/**
 * SUGGESTIONS API ENDPOINTS
 */

//AI for suggestion for articles
const getSuggestions = async () => {
  const res = await fetch(`${apiUrl}/suggestions`);
  const data = await res.json();
  return data;
};

//gets all the suggestions by the filter of votes
const getSuggestionsByVotes = async number => {
  const res = await fetch(`${apiUrl}//suggestions/votes/${number}`);
  const data = await res.json();
  return data;
};

export { getSuggestions, getSuggestionsByVotes };
