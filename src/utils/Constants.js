//local
/*const apiUrl = "http://127.0.0.1:8000/api/v1";
const serverUrl = "http://127.0.0.1:8000";*/
const clientUrl = "http://localhost:3000";

//oAuth - local
/*const clientId = "8";
const clientSecret = "HOviP7YrNwjm01FnCg9Bov7CS4INkWtjyK1HWYIg";*/

//Server
const apiUrl = "http://vacom.hopto.org/api/v1"; 
const serverUrl = "http://vacom.hopto.org";
//const clientUrl = "http://readhunt.surge.sh";

//oAuth - server
const clientId = "1";
const clientSecret = "hET1OEio45wNXsiIvmzTi1xbt8ZFZqHdEqTlk3R6";

const oAuthRedirectUrl = `${serverUrl}/oauth/authorize?client_id=${
  clientId
}&redirect_uri=${clientUrl}/callback&response_type=code&scope`;

const ALERT_OPTIONS = {
  offset: 14,
  position: "bottom left",
  theme: "light",
  time: 3000,
  transition: "fade"
};

export {
  apiUrl,
  clientId,
  clientSecret,
  serverUrl,
  clientUrl,
  oAuthRedirectUrl,
  ALERT_OPTIONS
};
