import { get } from '$lib/api';
import { createQuery } from '../createQuery';

const logout_fn = async (): Promise<object> => {
	const response = await get('/auth/providers/tradetracker/signout', {
		method: 'GET'
	});
	const json = await response.json();
	return json;
};

export const logout = createQuery(['logout'], logout_fn);
