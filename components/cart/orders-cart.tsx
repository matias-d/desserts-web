import { DessertI } from '@/types/Dessert'
import React, { ReactNode } from 'react'

interface OrdersCartProps {
    render : (cart : DessertI) => ReactNode
    cart : DessertI[]
}


export default function OrdersCart({ cart, render } : OrdersCartProps) {
    
  const orderTotal = cart.reduce((a, c) => (c.price * c.quantity!) + a, 0)  

  return (
    <div className='mt-4 w-full'>
    
        {
            cart.map(dessert => render(dessert))
        }

        <div className='flex items-center w-full justify-between mb-4'>
            <h5 className='text-sm text-gray-600'>Order Total</h5>
            <p className='text-primaryRose-900 font-bold text-xl'>${orderTotal.toFixed(2)}</p>
        </div>
    </div>

  )
}
