import type { PageLoad } from './$types';
import type { State } from '../../types';

export const load: PageLoad = async ({ parent }) => {
	const data = await parent();
	const { supabase } = data;
	let res = await supabase.from('states').select('*').eq('state_name', 'Alabama');
	if (res.data === null) {
		throw new Error('Something is broken');
	}
	const initStateData: State = res.data[0];
	return { activeState: initStateData };
};
