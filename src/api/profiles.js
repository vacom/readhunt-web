//Utils
import { apiUrl } from "../utils/Constants";
/**
 * PROFILES API ENDPOINTS
 */

//get the user profile by id
const getProfilebyId = async userId => {
  const res = await fetch(`${apiUrl}/profile/${userId}`);
  const data = await res.json();
  return data;
};

export { getProfilebyId };
