import xior from "xior";

const api = xior.create({
  baseURL: "https://pokeapi.co/api/v2",
});

api.interceptors.request.use((config) => {
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error;
  }
);

export default api;

