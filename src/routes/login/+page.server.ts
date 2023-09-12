import { supabase } from '$lib/supabaseClient';
import type { Actions } from './$types';

// export const actions = {
// 	login: async (event) => {
// 		const data = await event.request.formData();
// 		const email = data.get('email');
// 		const password = data.get('password');
// 		signInWithEmail(email, password);
// 	}
// } satisfies Actions;

// // need to post to sign up with form data
// // what is the return?  But I believe we need to check session in layout
// async function signInWithEmail(e: any, p: any) {
// 	const { data, error } = await supabase.auth.signInWithPassword({
// 		email: e,
// 		password: p
// 	});
// 	return data.session;
// }
