import { store } from "../../redux/store";
import axios from "axios";

const client = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

const AUTH_ROUTES = [
  // "/send-ot-whatsapp",
  "/send-auth-code",
  "/verify-auth-code",
];

const FILE_ROUTES = ["infer", "fine-tune"];

client.interceptors.request.use(
  (request: any) => {
    console.log("request.url", request.url);
    const authRoutes = AUTH_ROUTES.some((i) => {
      return request.url === i; // request.url.includes(i);
    });
    const uploadRoutes = FILE_ROUTES.some((i) => {
      return request.url.includes(i);
    });
    const { auth } = store.getState();
    const { token } = auth;
    console.log("token", token);
    if (!authRoutes) {
      // TODO: add token to secure request
      request.headers.Authorization = `Bearer ${
        token ||
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb2hhbi5tYXJhdGhlQGludGVncmF0aW9ud2luZ3MuY29tIiwidXNlck5hbWUiOiJSb2hhbiBNYXJhdGhlIiwiZW1wbG95ZWVJZCI6MSwiY29tcGFueUlkIjoxLCJicmFuY2hJZCI6IjEiLCJyb2xlcyI6WyJhZG1pbiIsImVtcGxveWVlIl0sImV4cCI6MTczOTY5Nzg5MH0.lPDrdexz8hgJZJs7iMY-LSGhQ8MqMQIhxbcdLWHqlJU"
      }`;
    }
    if (uploadRoutes) {
      request.headers["Content-Type"] = "multipart/form-data";
    }
    return request;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response: any) => {
    if (response.data.error) {
      return Promise.reject(response.data);
    }
    return Promise.resolve(response.data);
  },
  (error: any) => {
    console.log("error.response", error);
    if (error.response?.status === 403 || error.response?.status === 401) {
      const urlParts = error.response.config.url.split("/");
      const path = urlParts.slice(3).join("/"); // This assumes that the path starts at index 3

      // Check if any of the AUTH_ROUTES is a substring of the path
      const isInAuthRoutes = AUTH_ROUTES.some((route) => path.includes(route));

      if (!isInAuthRoutes) {
        // FIXME: handle expired token
        // localStorage.clear()
        // window.location.href = '/'
        return Promise.reject(error.response?.data);
      }
    }
    return Promise.reject(error.response?.data);
  }
);

export default client;
