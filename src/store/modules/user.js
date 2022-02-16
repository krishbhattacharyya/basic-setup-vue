import router from './../../router/index'
import { ApiProvider } from './../../utils/apiProvider'
import { API } from './../../services/api'
import {
    saveAuthInStorage,
} from './../../utils/storageProvider';

const userModule = {
    state: () => ({
        user: null,
    }),
    mutations: {
        async fetchUser(state) {
            const response = await ApiProvider.getRequest(API.auth.getAuth);
            state.user = response.data
            saveAuthInStorage(response.data)
            router.push('/home')
        }
    },
    actions: {
        fetchUser(context) {
            context.commit('fetchUser')
        }
    },
    getters: {
        getUserInfo: (state) => state.user
    }
}

export default userModule;