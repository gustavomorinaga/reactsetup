import axios from 'axios';
const { API_BASE_URL } = process.env;

export const api = axios.create({
	baseURL: API_BASE_URL,
});

export const fetcher = async (url: string) =>
	await api.get(url).then(res => res.data);
