import req from "./http";

export const apiGetRentedBooks = () => {
  const apiUrl =
    "https://my-json-server.typicode.com/Changtingweiyuanyuan/vue2-middleware/rented_books";
  return req("get", apiUrl);
};
