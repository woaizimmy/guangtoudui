import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
	info:{
		page:1,
		totalPage:0,
		list:[],
	}
};

const getters = {
	infoGet(){
		return state.info;
	},
};

const mutations = {
	info(state, obj){
		state.info = Object.assign(state.info,obj);
	},
};

const actions = {
	infoSet(context, obj){
		context.commit('info',obj);
	},
};

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});
 
export default store;