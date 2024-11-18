import { CONSTS } from "@/shared/consts/consts.ts";
import { authApi } from "@/shared/services/auth/auth.api.ts";
import axios, { AxiosResponse } from "axios";

export const api = axios.create({
	baseURL: "https://shikimori.one/api/",
	headers: {
		"User-Agent": CONSTS.USER_AGENT,
		Accept: "application/json",
		"Content-Type": "application/json",
		Authorization: `Bearer ${localStorage.getItem("access_token")}`,
	},
});

api.interceptors.response.use(
	(response: AxiosResponse) => {
		console.log(response);
		return response;
	},
	async (error) => {
		const originalRequest = error.config;
		if (error.response && error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			console.log("Trying refreshing tokens");
			const tokens = await authApi.refreshTokens(localStorage.getItem("refresh_token") || "");
			console.log("Tokens: ", tokens);

			if (tokens) {
				localStorage.setItem("access_token", tokens.access_token);
				localStorage.setItem("refresh_token", tokens.refresh_token);
				window.location.reload();
			}
		}
		return Promise.reject(error);
	},
);

// Интерсептор для ответов
// apiClient.interceptors.response.use(
//   (response: AxiosResponse) => {
//     console.log('Получен ответ:', response);
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;

//     // Проверяем, является ли ошибка связанной с авторизацией (например, 401)
//     if (error.response && error.response.status === 401 && !originalRequest._retry) {
//

//       originalRequest._retry = true; // Устанавливаем флаг, чтобы избежать повторного запроса
//       isRefreshing = true;

//       try {
//         // Здесь вы можете выполнить логику обновления токена
//         const response = await axios.post('/refresh-token', { /* данные для обновления токена */ });
//         const { token } = response.data; // Предполагаем, что новый токен возвращается в ответе

//         // Сохраняем новый токен
//         // Например, localStorage.setItem('token', token);

//         // Обновляем заголовок авторизации для оригинального запроса
//         originalRequest.headers['Authorization'] = `Bearer ${token}`;

//         // Повторяем оригинальный запрос
//         return apiClient(originalRequest);
//       } catch (err) {
//         return Promise.reject(err);
//       } finally {
//         isRefreshing = false;
//         // Обрабатываем очередь неудачных запросов
//         failedQueue.forEach((callback) => callback());
//         failedQueue = [];
//       }
//     }

//     console.error('Ошибка ответа:', error);
//     return Promise.reject(error);
//   }
// );
