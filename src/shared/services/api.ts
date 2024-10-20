import axios from "axios";

export const api = axios.create({
	baseURL: "https://shikimori.one/api/",
	headers: {
		"User-Agent": "ShikiLove",
		Accept: "application/json",
		"Content-Type": "application/json",
		Authorization: `Bearer ${localStorage.getItem("access_token")}`,
	},
});
