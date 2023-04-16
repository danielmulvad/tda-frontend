import { get } from '$lib/api';
import { createQuery } from '../createQuery';

const get_accounts = async (): Promise<object> => {
	const response = await get('/get_accounts', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const json = await response.json();
	return json;
};

export const tda_get_accounts = createQuery(['tda_get_accounts'], get_accounts);
