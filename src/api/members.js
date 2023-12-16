import req from "./http";

export const apiGetMembers = () => {
  const apiUrl =
    "https://my-json-server.typicode.com/Changtingweiyuanyuan/vue2-middleware/members";
  return req("get", apiUrl);
};
