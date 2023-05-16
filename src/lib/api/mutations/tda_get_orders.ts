import { get } from '$lib/api';
import { createMutation } from '../createMutation';

const get_orders = async (accountId: string): Promise<object[]> => {
	try {
		const response = await get(`/${accountId}/get_orders`, {
			method: 'GET'
		});
		const json = await response.json();
		return json;
	} catch (e) {
		console.error(e);
		return [];
	}
};

export const tda_get_orders = createMutation(['tda_get_orders'], (accountId: string) => get_orders(accountId));
