import { createStore } from "vuex";
import VuexPersistence from 'vuex-persist'

const storage = createStore({
    state: {
        isAuthenticated: false,
        name: '',
        lastname: '',
        isRole: '',
        id: ''
    },
    mutations: {
        setAuthenticated(state, value)
        {
            state.isAuthenticated = value;
        },
        setUserdata(state, name, lastname)
        {
            state.name = name;
            state.lastname = lastname;
        },
        setRole(state, role)
        {
            state.isRole = role;
        },
        setId(state, id)
        {
            state.id = id;
        },
    },
    plugins: [
        new VuexPersistence({
            storage: window.localStorage
        }).plugin
    ]
});

export default storage