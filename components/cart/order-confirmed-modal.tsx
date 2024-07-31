import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import React, { Fragment } from 'react'
import OrdersCart from './orders-cart'
import { DessertI } from '@/types/Dessert'
import CartCard from './cart-card'
import IconOrderConfirmed from '../icons/icon-order-confirmed'
import Button from '../ui/button'

interface OrderConfirmedModalProps {
    isOpen : boolean
    closeModal : () => void
    cart : DessertI[]
    onNewOrder : () => void
}

export default function OrderConfirmedModal({ isOpen, closeModal, cart, onNewOrder } : OrderConfirmedModalProps) {

  const handleNewOrder = () => {
    onNewOrder()
    closeModal()
  }

  return (
    <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <TransitionChild enter='ease-out duration-300' as={Fragment} enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='opacity-0' >
                    <div className="fixed bg-black inset-0 bg-opacity-25" />
                </TransitionChild>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild enter='ease-out duration-300' as={Fragment} enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='ease-in duration-200' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95' >
                        <DialogPanel className='relative w-full max-w-lg overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col p-6 space-y-4'>

                            <div >
                                <IconOrderConfirmed />
                                
                                <h2 className='mt-3 mb-1 text-3xl font-bold text-primaryRose-900'>Order Confirmed</h2>
                                <p className=' text-primaryRose-400 block mb-4'>We home you enjoy your food!</p>
                            </div>
                            
                            <section className='bg-primaryRose-50 rounded-md p-4 '>
                                <OrdersCart 
                                    cart={cart}
                                    render={(cart : DessertI) => <CartCard cart={cart}/>}
                                />
                            </section>

                            <Button  handleClick={handleNewOrder} title='Start New Order'/>
                         
                        </DialogPanel>
                    </TransitionChild>
                    </div>
                </div>

            </Dialog>

        </Transition>
    </>
  )
}
