import { post } from '..';
import { createMutation } from '../createMutation';

type Body = {
	email: string;
	password: string;
};

export const loginMutation = createMutation(['login'], (body: Body) => post('/auth/providers/tradetracker/signin', body));
