import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const httpUrl = process.env.REACT_APP_API_URL ?? "http://localhost:7071/api/";
const axioBackEnd = axios.create({
  baseURL: httpUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
axioBackEnd.interceptors.request.use((config) => {
  const key = localStorage.getItem("Authorization-token");
  console.log("key", key);
  config.headers["Authorization"] = key;
  return config;
});

const handleError = (errorMsg: any) => {
  // console.log("error", errorMsg);
  if (errorMsg.response.status === 401) {
    localStorage.removeItem("Authorization-token");
    window.location.href = "/login";
  }
  const { message, config = {} } = errorMsg;
  const { xsrfHearderName, xsrfCookieName } = config;

  if (message === "" || xsrfHearderName === "" || xsrfCookieName === "") {
    console.log("error here");
  }
};

const get = async (url: string, options?: any): Promise<any> => {
  return await axioBackEnd
    .get(url, options)
    .then((response) => response.data.data)
    .catch(handleError);
};

const post = async (url: string, data: object, options?: any): Promise<any> => {
  return await axioBackEnd
    .post(url, wrapData(data), options)
    .then((response) => {
      return response.data.data;
    })
    .catch(handleError);
};

// remove object property that value is null
export const wrapData = (data: any) => {
  Object.keys(data).forEach((key) => {
    if (data[key] === null) {
      delete data[key];
    }
  });
  return data;
};

export function wrapQueryParams(baseUrl: string, params: object) {
  // If params is empty or undefined, return baseUrl directly
  if (!params || Object.keys(params).length === 0) {
    return baseUrl;
  }

  const queryParams = new URLSearchParams();

  // Only add params that are not null
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      console.log("value", value);

      queryParams.append(key, value.toString());
    }
  });

  // If no valid params after filtering nulls, return baseUrl
  if (queryParams.toString() === "") {
    return baseUrl;
  }

  return `${baseUrl}?${queryParams.toString()}`;
}

const { defaults } = axioBackEnd;

export const request = {
  defaults,
  get,
  post,
  wrapQueryParams,
  wrapData,
};
