import {createStore} from "vuex";
import productModules from './modules/product.js';
import cartModules from './modules/cart.js';

const store = createStore({
    modules: {
        prods: productModules,
        cart: cartModules,
    }
});

export default store;