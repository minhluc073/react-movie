import axios from "axios";

const BASE_URL = "https://api.themoviedb.org";

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 40000,
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`,
        "Content-Type": "application/json",
    },
});

export const request = {
  async getPopularMovie(url) {
      console.log('url', url)
    return instance.get(`${url}`);
  },
};
