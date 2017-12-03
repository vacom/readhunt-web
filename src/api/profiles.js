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

//Creates a new profile based on the user ID
const createProfileByUserId = async (
  about = "Sobre mim",
  country = "País",
  avatar_url = "http://via.placeholder.com/50x50",
  cover_url = "http://via.placeholder.com/150x150",
  user_id
) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      about,
      country,
      avatar_url,
      cover_url,
      user_id
    })
  };
  const res = await fetch(`${apiUrl}/profile`, options);
  const data = await res.json();
  return data;
};

export { getProfilebyId, updateProfileByUserId, createProfileByUserId };
