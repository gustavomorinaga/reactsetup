import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:3333',
});

export const fetcher = async (url: string) =>
	await api.get(url).then(res => res.data);
