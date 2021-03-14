import useSWR from 'swr';
import { fetcher } from '@services/api';

export function useFetch<Data = any, Error = any>(url: string, initial?: any) {
	const { data, error, mutate } = useSWR<Data, Error>(
		url,
		async url => {
			const response = await fetcher(`${url}`);

			return response;
		},
		{ initialData: initial }
	);

	return { data, error, mutate };
}
