import { get } from '$lib/api';
import { z } from 'zod';
import { createQuery } from '../createQuery';

const schema = z.object({
	authorization_url: z.string()
});

export type Get_Authorization_Url = z.infer<typeof schema>;

const validate_get_authorization_url = async (data: unknown) => await schema.parseAsync(data);

const get_authorization_url = async (): Promise<Get_Authorization_Url> => {
	const response = await get('/auth/providers/tda', {
		method: 'GET'
	});
	const json = await response.json();
	const data = await validate_get_authorization_url(json);
	return data;
};

export const tda_get_authorization_url = createQuery(['tda_get_authorization_url'], get_authorization_url);
