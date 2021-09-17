import useSWR from 'swr';
import { fetcher } from '@services/api';

const SEGUNDOS = 30;

export function useFetch<Data = any, Error = any>(url: string, initial?: any) {
	const { data, error, mutate } = useSWR<Data, Error>(
		url,
		async url => {
			const response = await fetcher(`${url}`);

			return response;
		},
		{ fallbackData: initial, refreshInterval: SEGUNDOS * 1000 }
	);

	return { data, error, mutate };
}
