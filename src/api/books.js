import req from "./http";

export const apiGetBooks = () => {
  const apiUrl =
    "https://my-json-server.typicode.com/Changtingweiyuanyuan/vue2-middleware/books";
  return req("get", apiUrl);
};
