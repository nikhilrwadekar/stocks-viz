import { AxiosResponse } from 'axios'
import { Module } from "vuex";
import APIService from "../../api"
const initialState = () => {
	return {
		// Results 
		history: {},
		search: {},
	}
}

const results: Module<any, any> =  {
	state: initialState(),
	mutations: {
			SET_STOCK_HISTORY(state, history) {

				const symbol: string = history.metadata['2. Symbol'];
				const obj: object = {
					[symbol]: history.timeseries
				}
	
				state.history = { ...state.history, ...obj }
			},
			SET_SEARCH_SUGGESTIONS(state, search) {
				const keywords: string = search.keywords;
				const obj: object = {
					[keywords]: search.bestMatches
				}
	
				state.search = { ...state.search, ...obj }
			},
		},
		actions: {
			// Search & Fetch
			GET_STOCK_HISTORY(context, symbol: string) {
				const exists = context.getters.history[symbol]

				return new Promise((resolve, reject) => {
					if (!exists && symbol) {
						APIService.get('', { params: { function: 'TIME_SERIES_DAILY', symbol } }).then((res: AxiosResponse) => {
							const { data } = res;
	
							if(data['Meta Data'] && data['Time Series (Daily)']) {
								// Continue with updation
								const metadata = data['Meta Data'];
								const timeseries = data['Time Series (Daily)'];
							
								context.commit('SET_STOCK_HISTORY', { metadata, timeseries });
								resolve();
								
							} else {
								// Throw an error - preferrably redirect to 404
								reject();
							}
							
						})
					}	
				
				})

				
	
	
			
			},
			GET_SEARCH_SUGGESTIONS(context, keywords: string) {
	
				context.commit('SET_CURRENT_SEARCH', keywords);
				const exists = context.getters.search[keywords];
	
				if (!exists && keywords) {
					APIService.get('', { params: { function: 'SYMBOL_SEARCH', keywords } }).then((res: AxiosResponse) => {
						const { bestMatches } = res.data;
	
						context.commit('SET_SEARCH_SUGGESTIONS', { bestMatches, keywords });
					})
				}
			},
		},
		getters: {
			// Search
			search: (state) => {
				return state.search
			},	
			history: (state) => {
				return state.history
			},
			currentSearchResults: (state, getters) => {
				const { currentSearch, search } = getters;
				return search[currentSearch];
			},
		}
}

export default results;