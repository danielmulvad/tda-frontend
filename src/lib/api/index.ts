import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { env } from '$env/dynamic/public';
import { get as getStore } from 'svelte/store';

const api = async (inputUrl: string | URL, init?: RequestInit | undefined): Promise<Response> => {
	const credentials = init?.credentials || 'include';
	const pageObj = getStore(page);
	const origin = env?.['PUBLIC_API_BASE_URL'] ?? pageObj.url.origin;
	const url = new URL(`/api${inputUrl}`, origin);
	const response = await fetch(url, { ...init, credentials });
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	if (response.status === 401) {
		goto('/login', { replaceState: true });
	}
	return response;
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
