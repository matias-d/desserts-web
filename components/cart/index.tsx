"use client"

import IconCarbonNeutral from '../icons/icon-carbon-neutral'
import OrderConfirmedModal from './order-confirmed-modal'
import { DessertI } from '@/types/Dessert'
import React, { useState } from 'react'
import EmptyCart from './empty-cart'
import Button from '../ui/button'

interface CartProps {
    cart : DessertI[]
    children : React.ReactNode
    onNewOrder : () => void
}

export default function Cart({ cart, children, onNewOrder } : CartProps) {

  const [open, setOpen] = useState(false)

  if (!cart.length) return <EmptyCart />

  return (
    <>
      <article className='bg-white rounded-md p-6 flex flex-col items-center justify-center '>
          <h2 className='text-xl font-bold text-primary self-start'>Your Cart ({cart.length})</h2>
          
          { children }

          <div className='bg-primaryRose-50 rounded-md py-4 w-full flex items-center justify-center mb-4'>
            <p className='flex items-center gap-x-2 text-xs text-primaryRose-900'><IconCarbonNeutral /> This is a <strong>carbon-neutral</strong> delivery</p>
          </div>  

          <Button title='Confirm Order' handleClick={() => setOpen(true)} />
          
      
      </article>
      <OrderConfirmedModal 
        closeModal={() => setOpen(false)} 
        isOpen={open} 
        cart={cart}
        onNewOrder={onNewOrder}
      />
    </>
  )
}
