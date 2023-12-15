import type { PageLoad } from './$types';
import { supabase } from '$lib/supabaseClient';
import type { State } from '../types';

export const load: PageLoad = async (data) => {
	let res = await supabase.from('states2').select('*').eq('state_name', 'Alabama');
	if (res.data === null) {
		console.log(res);
		throw new Error('Something is broken');
	}
	const initStateData: State = res.data[0];
	return { activeState: initStateData };
};
