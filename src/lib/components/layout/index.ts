import { page } from '$app/stores';
import { sidebarLinks } from '$lib/constants';
import { derived } from 'svelte/store';

type BreadcrumbRoute = {
	id: number;
	pathname: string;
	name: string;
	parentId?: number;
};
function createBreadcrumb(routes: BreadcrumbRoute[], root: BreadcrumbRoute, reduced: BreadcrumbRoute[] = []): BreadcrumbRoute[] {
	const { parentId } = root;
	if (parentId !== undefined) {
		const parent = routes.find(({ id }) => id === parentId);
		if (parent) return createBreadcrumb(routes, parent, [root, ...reduced]);
	}
	return [root, ...reduced];
}

export const breadcrumb = derived<typeof page, BreadcrumbRoute[]>(page, ({ url }) => {
	const found = sidebarLinks.find((route) => route.pathname === url.pathname);
	if (!found) return [];
	return createBreadcrumb(sidebarLinks, found);
});
