import useSWR from 'swr';
import api from '@services/api';

const { API_BASE_URL } = process.env;

export function useFetch<Data = any, Error = any>(url: string) {
	const { data, error, mutate } = useSWR<Data, Error>(url, async url => {
		const response = await api.get(`${API_BASE_URL}/${url}`);

		return response.data;
	});

	return { data, error, mutate };
}
