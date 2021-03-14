import axios from 'axios';
const { API_BASE_URL } = process.env;

export const api = axios.create({
	baseURL: API_BASE_URL,
});

export const fetcher = async <Data = any>(url: string): Promise<Data> =>
	await api.get<Data>(url).then<Data>(res => res.data);
