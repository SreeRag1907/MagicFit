import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";
import magicFitReducer from './Slices/MagicFitSlice';


const Store = configureStore({
      reducer: {
            cart: cartReducer,
            magicFit: magicFitReducer,

      },
})

export default Store;