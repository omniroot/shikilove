import axios from "axios";
import { access } from "fs";

const _shikimoriAuth = axios.create({
  baseURL: "https://shikimori.one/",
  headers: {
    "User-Agent": "ShikiLove",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export interface IAuthTokens {
  access_token: string;
  refresh_token: string;
}

export const useAuthorization = () => {
  const fetchTokens = async (authorizationCode: string) => {
    try {
      const response = await _shikimoriAuth.post<IAuthTokens>("oauth/token", {
        grant_type: "authorization_code",
        client_id: "C0cTq8ZDkHvhldEsKgxlCXam--xNTC0nk6db3EsFozI",
        client_secret: "nrISbmULxj2wA6sb0645-bvJwjwrUTUMyr3ZAiKso9U",
        code: String(authorizationCode),
        redirect_uri: "http://localhost:5173/login/",
      });
      if (response.data) {
        return {
          access_token: response.data.access_token,
          refresh_token: response.data.refresh_token,
        };
      }
    } catch (error) {
      console.log("Error while login", error);
    }
  };

  const refreshTokens = async () => {
    try {
      const response = await _shikimoriAuth.post<IAuthTokens>("oauth/token", {
        grant_type: "refresh_token",
        client_id: "C0cTq8ZDkHvhldEsKgxlCXam--xNTC0nk6db3EsFozI",
        client_secret: "nrISbmULxj2wA6sb0645-bvJwjwrUTUMyr3ZAiKso9U",
        refresh_token: localStorage.getItem("refresh_token"),
      });
      if (response.data) {
        return {
          access_token: response.data.access_token,
          refresh_token: response.data.refresh_token,
        };
      }
    } catch (error) {
      console.log("Error while refreshing tokens", error);
    }
  };
  return { fetchTokens, refreshTokens };
};
