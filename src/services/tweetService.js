import axios from "axios";

axios.defaults.baseURL = process.env.TWITTER_API_URL;
let TWEETS_API_URL = "https://pacific-eyrie-79907.herokuapp.com/api/";
//let TWEETS_API_URL = "http://localhost:3900/api/";

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
  const { data: tweetsArr } = await axios.get(TWEETS_API_URL + "tweets/"); 
  return tweetsArr;
}