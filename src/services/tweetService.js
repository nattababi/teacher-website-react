import axios from "axios";

//axios.defaults.baseURL = process.env.TWITTER_API_URL;
let TWITTER_API_URL = "https://gentle-cliffs-74029.herokuapp.com/api/";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    //logger.log(error);
    //toast.error("An unexpected error occurrred.");
  }
  return Promise.reject(error);
});

export async function getTweets() {
  const { data: tweetsArr } = await axios.get(TWITTER_API_URL + "tweets/"); 
  return tweetsArr;
}