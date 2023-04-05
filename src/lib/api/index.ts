import { PUBLIC_API_BASE_URL } from '$env/static/public';

const api = async (inputUrl: string | URL, init?: RequestInit | undefined): Promise<Response> => {
	const credentials = init?.credentials || 'include';
	const url = new URL(inputUrl, PUBLIC_API_BASE_URL);
	return fetch(url, { ...init, credentials });
};

export const get = async (url: string, init?: RequestInit | undefined): Promise<Response> => {
	return api(url, { ...init, method: 'GET' });
};

export const post = async (url: string, init?: RequestInit | undefined): Promise<Response> => {
	return api(url, { ...init, method: 'POST' });
};
