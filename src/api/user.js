//Utils
import {
  apiUrl,
  clientId,
  clientSecret,
  clientUrl,
  serverUrl
} from "../utils/Constants";
/**
 * USER API ENDPOINTS
 */

//Login User
const loginUser = async code => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      grant_type: "authorization_code",
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: `${clientUrl}/callback`,
      code: code
    })
  };
  const res = await fetch(`${serverUrl}/oauth/token`, options);
  const data = await res.json();
  console.log(res);
  return data;
};

//Creates a new user
const createNewUser = async (name, email, password) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  };
  const res = await fetch(`${apiUrl}/user`, options);
  const data = await res.json();
  return data;
};

export { createNewUser, loginUser };
