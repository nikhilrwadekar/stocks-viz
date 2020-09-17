import { Module } from "vuex";

const initialState = () => ({
	username: 'mcapuser',
	password: 'password',
	authenticated: false
})

const auth: Module<any, any> = {
	state: initialState(),
	mutations: {
		// Auth
		SET_AUTH(state) {
			state.authenticated = true;
		}
	},
	actions: {
		// Auth
		LOGIN(context, credentials) {
			const username = context.state.username;
			const password = context.state.password;


			return new Promise((resolve, reject) => {
				if (username === credentials.username && password === credentials.password) {
					context.commit('SET_AUTH')
					resolve()
				}
				reject()
			})
		},
		LOGOUT() {
			window.localStorage.removeItem('vuex');
		}
	},
	getters: {
		// Auth
		authenticated(state) {
			return state.authenticated;
		},
		username(state) {
			return state.username;
		}
	}
}

export default auth;