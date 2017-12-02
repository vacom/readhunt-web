//import axios from "axios";
//Utils
import {
  apiUrl,
  clientId,
  clientSecret,
  clientUrl,
  serverUrl
} from "../utils/Constants";
import { _token } from "../utils/Utils";
/**
 * USER API ENDPOINTS
 */

/*axios.defaults.baseURL = "http://127.0.0.1:8000";

if (_token()) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + _token();
}*/

//GETS

//Gets the information from the user thats is autenticated
const getMe = async () => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${_token()}`,
      "Content-Type": "application/json"
    }
  };
  const res = await fetch(`${apiUrl}/me`, options);
  const data = await res.json();
  return data;
};

//POSTS

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

//UUpdates the autenticated user
const updateUserById = async (name, user_id) => {
  const options = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${_token()}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name
    })
  };
  const res = await fetch(`${apiUrl}/user/${user_id}`, options);
  const data = await res.json();
  return data;
};

export { createNewUser, loginUser, getMe, updateUserById };
