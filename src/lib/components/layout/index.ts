import { page } from '$app/stores';
import { derived } from 'svelte/store';

type Route = {
	pathname: string;
	name: string;
	parentPathname?: string;
};

export const routes: Route[] = [
	{
		pathname: '/',
		name: 'Overview'
	},
	{
		pathname: '/settings/',
		name: 'Settings',
		parentPathname: '/'
	}
];

function createBreadcrumb(route: Route, reduced: Route[] = []): Route[] {
	const { parentPathname } = route;
	if (parentPathname) {
		const parent = routes.find(({ pathname }) => pathname === parentPathname);
		if (parent) return createBreadcrumb(parent, [route, ...reduced]);
	}
	return [route, ...reduced];
}

export const breadcrumb = derived<typeof page, Route[]>(page, ({ url }) => {
	const found = routes.find((route) => route.pathname === url.pathname);
	if (!found) return [];
	return createBreadcrumb(found);
});
