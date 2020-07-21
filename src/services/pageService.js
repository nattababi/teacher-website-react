import axios from "axios";

//axios.defaults.baseURL = process.env.TEACHER_API_URL;
let TEACHER_API_URL = "https://polite-sorry-98582.herokuapp.com/api/";

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

export async function getPage(page) {
  const { data: pageObj } = await axios.get(TEACHER_API_URL + "pages/" + page);
  return pageObj;
}
