import axios from "axios";

const config = {
  withCredentials: false,
  responseType: "json",
};

/**
 * 請求失敗的統一處理
 * @param {*} status
 * @param {*} message
 */
const errorHandle = (status, message) => {
  switch (status) {
    case 401:
      console.log("error 401");
      break;
    case 403:
      console.log("error 403");
      break;
    case 404:
      console.log("error 404");
      break;
    case 500:
      console.log("error 500");
      break;
    case 503:
      console.log("error 503");
      break;

    default:
      console.error(`response沒有攔截到的錯誤: ${message}`);
  }
};

/**
 * 封裝請求
 * @param {*} method
 * @param {*} url
 * @param {*} data
 * @param {*} customConfig 其他屬性請附加於此
 */
export default function (method, url, data = null, customConfig = null) {
  const instanceConfig = { ...config };
  if (customConfig && customConfig["contentType"]) {
    instanceConfig.headers = {
      ...instanceConfig.headers,
      "Content-Type": customConfig["contentType"],
      Accept: customConfig["contentType"],
    };
  }

  // Create instance
  const $http = axios.create(instanceConfig);

  // Add a request interceptors
  $http.interceptors.request.use(
    request => {
      return request;
    },
    error => {
      console.error(`http request error`);
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  $http.interceptors.response.use(
    response => {
      // Do something with response data
      return response;
    },
    error => {
      // Do something with response error
      console.error(`http response error`);
      console.log(error);

      return Promise.reject(error);
    }
  );


  method = method.toLowerCase();
  const requestConfig = { params: data };
  switch (method) {
    case "post":
      return $http.post(url, data);
    case "get":
      if (customConfig && customConfig["responseType"]) {
        requestConfig.responseType = customConfig["responseType"];
      }
      return $http.get(url, requestConfig);
    case "delete":
      return $http.delete(url, { params: data });
    case "put":
      return $http.put(url, data);
    case "patch":
      return $http.patch(url, data);
    default:
      console.error(`未知的method: ${method}`);
      return false;
  }
}
