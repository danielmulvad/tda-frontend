import { env } from '$env/dynamic/public';

const api = async (inputUrl: string | URL, init?: RequestInit | undefined): Promise<Response> => {
	const credentials = init?.credentials || 'include';
	const envBaseUrl = env?.['PUBLIC_API_BASE_URL'] || '';
	const origin = envBaseUrl.length > 0 ? envBaseUrl : window.location.origin;
	const url = new URL(inputUrl, origin);
	const fetchResponse = await fetch(url, { ...init, credentials });
	if (fetchResponse.status === 401 && import.meta.env.DEV) {
		const refresh_token = env?.['PUBLIC_API_DEVELOPMENT_REFRESH_TOKEN'] || '';
		const response = await post('/api/auth/providers/tda', {
			body: JSON.stringify({
				refresh_token
			})
		});
		const json = await response.json();
		if (document.cookie.includes('refresh_token=')) {
			document.cookie = document.cookie.replace(
				/refresh_token=[^;]+/,
				`refresh_token=${json?.refresh_token}`
			);
		} else {
			document.cookie += `refresh_token=${json.refresh_token}`;
		}
	}
	return fetchResponse;
};

export const get = async (url: string, init?: RequestInit | undefined): Promise<Response> => {
	return api(url, { ...init, method: 'GET' });
};

export const post = async (url: string, init?: RequestInit | undefined): Promise<Response> => {
	const headers = {
		...init?.headers,
		'Content-Type': 'application/json'
	};
	return api(url, { ...init, headers, method: 'POST' });
};
