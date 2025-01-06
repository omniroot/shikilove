export const CONSTS = {
	// Global consts
	REFETCH_INTERVAL: 550000,
	STALE_TIME: 550000,

	// For api services
	API_URL: import.meta.env.VITE_API_URL,
	URL: import.meta.env.VITE_URL,
	USER_AGENT: import.meta.env.VITE_USER_AGENT,
	OAUTH_URL: import.meta.env.VITE_OAUTH_URL,
	OAUTH_CLIENT_ID: import.meta.env.VITE_OAUTH_CLIENT_ID,
	OAUTH_CLIENT_SECRET: import.meta.env.VITE_OAUTH_CLIENT_SECRET,
	OAUTH_REDIRECT_URI: import.meta.env.VITE_OAUTH_REDIRECT_URI,
};
