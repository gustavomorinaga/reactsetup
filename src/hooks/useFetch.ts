import useSWR from 'swr';
import { fetcher } from '@services/api';

const { API_BASE_URL } = process.env;

export function useFetch<Data = any, Error = any>(url: string, initial?: any) {
	const { data, error, mutate } = useSWR<Data, Error>(
		url,
		async url => {
			const response = await fetcher(`${API_BASE_URL}/${url}`);

			return response;
		},
		{ initialData: initial }
	);

	return { data, error, mutate };
}
