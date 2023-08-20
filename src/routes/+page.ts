import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	// we will want to load with the first state - Alabama
	// in future we can load their local state or some shit

	return {
		activeState: {
			id: 2,
			state_name: 'Alabama',
			noncompete_length: '2 Years',
			date_passed: '11/09/1991',
			law_code: '123.46',
			sources: 'abah',
			writeup: 'abah'
		}
	};
};
