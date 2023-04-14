import { post } from '..';
import { createMutation } from '../createMutation';

type Body = {
	email: string;
	password: string;
};

export const signupMutation = () => createMutation(['signup'], (body: Body) => post('/auth/providers/tradetracker/signup', body));
