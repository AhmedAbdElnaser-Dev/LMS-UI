import axios from "axios";
import { useRuntimeConfig } from "#imports";

export default () => {
	const config = useRuntimeConfig();

	return axios.create({
		baseURL: config.public.apiBaseUrl,
		withCredentials: true,
		headers: {
			"Content-Type": "application/json",
		},
	});
};