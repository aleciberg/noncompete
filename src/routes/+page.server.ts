// import type { PageLoad } from './$types';
// import { supabase } from '$lib/supabaseClient';
// import type { State } from '../types';

// // Potential to make this server side only
// export const load: PageLoad = async ({ parent }) => {
// 	const data = await parent();
// 	console.log(data);
// 	console.log(data);
// 	let res = await supabase.from('states2').select('*').eq('state_name', 'Alabama');
// 	if (res.data === null) {
// 		console.log(res);
// 		throw new Error('Something is broken');
// 	}
// 	const initStateData: State = res.data[0];
// 	return { activeState: initStateData };
// };
// // export const load: any = async (data) => {
// // 	let res = await data.locals.supabase.from('states2').select('*').eq('state_name', 'Alabama');
// // 	if (res.data === null) {
// // 		console.log(res);
// // 		throw new Error('Something is broken');
// // 	}
// // 	const initStateData: State = res.data[0];
// // 	return { activeState: initStateData };
// // };
