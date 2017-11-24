//Utils
import { apiUrl } from "../utils/Constants";
/**
 * SEARCHES API ENDPOINTS
 */

//Search any article in the db by keywords
const getSearch = async query => {
  const res = await fetch(`${apiUrl}/search/${query}`);
  const data = await res.json();
  return data;
};

export { getSearch };
