import http from "./httpService";

export async function getTweets() {
  const { data: tweetsArr } = await http.get("tweets/"); 
  return tweetsArr;
}