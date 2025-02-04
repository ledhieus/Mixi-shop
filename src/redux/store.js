import { configureStore } from "@reduxjs/toolkit";
import  favoriteReducer  from "./slices/favorite"
import  cartReducer  from "./slices/cart"
import  totalBillReducer  from "./slices/totalBill"
import  checkLoginReducer  from "./slices/login"
import  billReducer  from "./slices/bill"
import  infoUserReducer  from "./slices/infoUser"
import  countFavoriteReducer  from "./slices/countFavorite"
import  countCartReducer  from "./slices/countCart"
import  productListReducer  from "./slices/product"

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    cart: cartReducer,
    totalBill: totalBillReducer,
    checkLogin: checkLoginReducer,
    bill: billReducer,
    infoUser: infoUserReducer,
    countFavorite: countFavoriteReducer,
    countCart: countCartReducer,
    productList: productListReducer,
  },
})