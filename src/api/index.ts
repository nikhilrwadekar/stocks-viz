// import { API_URL, API_KEY } from "@/config";

import Vue from 'vue'
import axios, { AxiosRequestConfig } from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const API_URL = process.env.VUE_APP_API_URL;
const API_KEY = process.env.VUE_APP_API_KEY;

const APIService = {
	get(endpoint: string, config: AxiosRequestConfig) {
		return Vue.axios.get(`${API_URL}/${endpoint}`, {
			params: { ...config.params, apikey: API_KEY }
		})
	}
}

export default APIService