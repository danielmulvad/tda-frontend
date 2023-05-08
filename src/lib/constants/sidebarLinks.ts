export type SidebarLink = {
	id: number;
	pathname: string;
	name: string;
	parentId?: number;
};

export const sidebarLinks: SidebarLink[] = [
	{
		id: 0,
		name: 'Overview',
		pathname: '/'
	},
	{
		id: 1,
		name: 'Settings',
		pathname: '/settings/'
	},
	{
		id: 2,
		name: 'Brokerage',
		parentId: 1,
		pathname: '/settings/brokerage/'
	},
	{
		id: 3,
		name: 'TD Ameritrade',
		parentId: 2,
		pathname: '/settings/brokerage/tdameritrade/'
	}
];
