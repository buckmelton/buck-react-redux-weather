# This is a public key
const API_KEY = 'b6907d289e10d714a6e88b30761fae22';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER;
    payload: request;
  }
}
