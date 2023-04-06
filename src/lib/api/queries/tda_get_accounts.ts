import { get } from '$lib/api';
import { createQuery } from '../createQuery';

const get_accounts = async (): Promise<object> => {
	const response = await get('/api/get_accounts', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const json = await response.json();
	return json;
};

export const tda_get_accounts = () =>
	createQuery({
		queryFn: get_accounts,
		queryKey: ['tda_get_accounts']
	});
