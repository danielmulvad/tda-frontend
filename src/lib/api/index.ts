import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { env } from '$env/dynamic/public';
import { get as getStore } from 'svelte/store';

const api = async (inputUrl: string | URL, init?: RequestInit | undefined): Promise<Response> => {
	const credentials = init?.credentials || 'include';
	const envBaseUrl = env?.['PUBLIC_API_BASE_URL'] || '';
	const pageObj = getStore(page);
	const origin = envBaseUrl.length > 0 ? envBaseUrl : pageObj.url.origin;
	const url = new URL(`/api${inputUrl}`, origin);
	const fetchResponse = await fetch(url, { ...init, credentials });
	if (fetchResponse.status === 401 && import.meta.env.DEV) {
		const refresh_token = env?.['PUBLIC_API_DEVELOPMENT_REFRESH_TOKEN'] || '';
		const response = await post('/auth/providers/tda', {
			refresh_token
		});
		const json = await response.json();
		if (document.cookie.includes('refresh_token=')) {
			document.cookie = document.cookie.replace(/refresh_token=[^;]+/, `refresh_token=${json?.refresh_token}`);
		} else {
			document.cookie += `refresh_token=${json.refresh_token}`;
		}
	} else if (fetchResponse.status === 401) {
		goto('/login');
	}
	return fetchResponse;
};

export const get = async (url: string, init?: RequestInit | undefined): Promise<Response> => {
	return api(url, { ...init, method: 'GET' });
};

export const post = async <const B extends object>(url: string, body: B, init?: RequestInit | undefined): Promise<Response> => {
	const headers = {
		...init?.headers,
		'Content-Type': 'application/json'
	};
	return api(url, { ...init, headers, method: 'POST', body: JSON.stringify(body) });
};
