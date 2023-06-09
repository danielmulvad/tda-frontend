import { get } from '$lib/api';
import { createQuery } from '../createQuery';

const get_accounts = async (): Promise<any[]> => {
	try {
		const response = await get('/get_accounts', {
			method: 'GET'
		});
		const json = await response.json();
		return json;
	} catch (e) {
		console.error(e);
		return [];
	}
};

export const tda_get_accounts = createQuery(['tda_get_accounts'], get_accounts);
