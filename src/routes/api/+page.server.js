// import { fromBucket, from, auth, storage, supabaseClient } from '$lib/shared';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
	String(import.meta.env.VITE_SUPABASE_URL),
	String(import.meta.env.VITE_SUPABASE_ANON_KEY)
);

export async function load() {
	// const { data } = supabase.from('countries').select();

	// console.log(supabase.from('countries').select());

	// console.log(data);

	return {
		// countries: data ?? []
	};
}
