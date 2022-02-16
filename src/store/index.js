import { createStore } from 'vuex'
import userModule from './modules/user'

// Create a new store instance.
export const store = createStore({
    modules: {
        user: userModule
    }
});