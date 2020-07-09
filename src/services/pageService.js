import http from "./httpService";

export async function getPage(page) {
  const { data: pageObj } = await http.get("pages/" + page);
  return pageObj;
}
