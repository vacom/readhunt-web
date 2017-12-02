//Utils
import { apiUrl } from "../utils/Constants";
import { _token } from "../utils/Utils";
/**
 * PROFILES API ENDPOINTS
 */

//GETS

//get the user profile by id
const getProfilebyId = async userId => {
  const res = await fetch(`${apiUrl}/profile/all/${userId}`);
  const data = await res.json();
  return data;
};

//POSTS

//Updates the user profile by ID
const updateProfileByUserId = async ({
  about,
  country,
  avatar_url,
  cover_url,
  description,
  user_id
}) => {
  const options = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${_token()}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      about,
      country,
      avatar_url,
      cover_url,
      description,
      user_id
    })
  };
  const res = await fetch(`${apiUrl}/profile/${user_id}`, options);
  const data = await res.json();
  return data;
};

export { getProfilebyId, updateProfileByUserId };
