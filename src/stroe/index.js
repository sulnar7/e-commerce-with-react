import { configureStore,createSlice  } from '@reduxjs/toolkit'
import React from 'react';

const initialStateProducts = {
    products:[],
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
            }
           
        },
        removeFromCart:(state,action)=>{
            const removeFromCard=state.products.filter(item=>item!==action.payload)
            state.products=removeFromCard
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
