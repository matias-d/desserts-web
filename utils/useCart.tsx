"use client"

import { cartInitialState, cartReducer } from './reducer'
import { useReducer } from 'react'
import { DessertI } from '@/types/Dessert'

export default function useCart() {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = (dessert : DessertI) => dispatch({
        type : 'ADD_TO_CART',
        payload : dessert
    })

    const removeToCart = (dessert : DessertI) => dispatch({
        type : 'REMOVE_TO_CART',
        payload : dessert
    })

    const onNewOrder = () => dispatch({
        type : 'NEW_ORDER'
    })

    const onIncrementProduct = (dessert : DessertI) => dispatch({
        type : 'INCREMENT_PRODUCT',
        payload : dessert
    })

    const onDescrementProduct = (dessert : DessertI) => dispatch({
        type : 'DECREMENT_PRODUCT',
        payload : dessert
    })


    return {
        cart : state,
        addToCart,
        removeToCart,
        onNewOrder,
        onIncrementProduct,
        onDescrementProduct
    }

}
