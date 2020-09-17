import { Module } from "vuex";

const initialState = () => {
	return {
		// Search
		symbol: '',
		currentSearch: ''
	}
}



const search: Module<any, any> =  {
	state: initialState(),
	mutations: {
		SET_CURRENT_HISTORY(state, symbol) {
      state.symbol = symbol
    },
    
    SET_CURRENT_SEARCH(state, keywords) {
      state.currentSearch = keywords
    },
	},
	// actions: { ... },
	getters: {
		symbol: (state) => {
      return state.symbol
		},
		currentSearch: (state) => {
      return state.currentSearch
    },
	}
}

export default search;