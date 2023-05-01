import { configureStore,createSlice  } from '@reduxjs/toolkit'
import React from 'react';

const initialStateProducts = {
    products:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],
    cartTotalQuantity:0,
    cartTotalAmount:0
   
}
const products=createSlice({
    name:"products",
    initialState:initialStateProducts,
    reducers:{
        addToCart:(state,action)=>{
            console.log(state.products)
            const itemIndex=state.products.findIndex(item=>item.id===action.payload.id)

            if(itemIndex>=0){
                state.products[itemIndex].cartQuantity+=1
            }else{
                const temp={...action.payload,cartQuantity:1}
                // state.products=[
                //     ...state.products,
                //     action.payload,  
                    
                    
                //  ]
                state.products=[
                    ...state.products,
                    temp
                ]
                localStorage.setItem('cartItems',JSON.stringify(state.products))
            }
           
        },
        removeFromCart:(state,action)=>{
            const removeFromCard=state.products.filter(item=>item!==action.payload)
            state.products=removeFromCard
        },

        // searchProducts:(state,action)=>{
        //     console.log("products",state.products)
        //     state.products=state.products.filter(product=>action.payload.toLowerCase().includes(product.title.toLowerCase()))
        // },

        decreaseCart:(state,action)=>{
            const itemIndex=state.products.findIndex(item=>item.id===action.payload.id)
            if(action.payload.cartQuantity>1){
                state.products[itemIndex].cartQuantity-=1
            }
            else if(action.payload.cartQuantity===1){
                const newCart=state.products.filter(item=>item.id!==action.payload.id)
                state.products=newCart
            }
            localStorage.setItem("cartItems",JSON.stringify(state.products))
        },
        increaseCart:(state,action)=>{
            const itemIndex=state.products.findIndex(item=>item.id===action.payload.id)
            state.products[itemIndex].cartQuantity+=1
            // state.products[itemIndex].price*=state.products[itemIndex].cartQuantity
            localStorage.setItem("cartItems",JSON.stringify(state.products))

        },
        getTotals:(state,action)=>{
            let {total,quantity}=state.products.reduce((cartTotal,cartItem)=>{
                const {price,cartQuantity}=cartItem
                const itemTotal=price*cartQuantity;
                cartTotal.total+=itemTotal;
                cartTotal.quantity+=cartQuantity
                return cartTotal

            },{total:0,
               quantity:0});
               state.cartTotalAmount=total;
               state.cartTotalQuantity=quantity
        }
        
    }
})
const initialStateFilter={
    filterProducts:[]
}
const filterProducts=createSlice({
    name:"filterProducts",
    initialState:initialStateFilter,
    reducers:{
        filterProducts:(state,action)=>{
            state.filterProducts=[
                ...state.filterProducts,
                action.payload
            ]
        },
        filterProductsDel:(state,action)=>{
            const removeCart=state.filterProducts.filter(item=>item!==action.payload)
            state.filterProducts=removeCart
            
            //filtered del one element
        },
      

    }
})
const initialStateSearch={
    searchProducts:[]
}
const filterProductsSearch=createSlice({
    name:"searchProducts",
    initialState:initialStateSearch,
    reducers:{
        searchProducts:(state,action)=>{
            state.searchProducts=action.payload;
        }
    }
})

const store = configureStore({
    reducer:{products:products.reducer,filterProducts:filterProducts.reducer,searchProducts:filterProductsSearch.reducer}
})
export default store;
export const  productActions=products.actions;
export const  filterProductAction=filterProducts.actions
export const  searchProductAction=filterProductsSearch.actions
