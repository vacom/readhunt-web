const apiUrl = "http://127.0.0.1:8000/api/v1";
const serverUrl = "http://127.0.0.1:8000";
const clientUrl = "http://localhost:3000/#";
const clientId = "6";
const clientSecret = "kJKM7IQfjKF0Txoq5nZuGNUPc7Ct6Diz8b7XTwga";
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
