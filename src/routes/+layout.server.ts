// src/routes/+layout.server.ts
// runs on the server, can load data to the front end from here
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals: { getSession } }) => {
	return {
		session: await getSession()
	};
};
