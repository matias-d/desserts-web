"use client"


import Desserts from "@/components/desserts";
import desserts from '@/utils/data.json'
import Cart from "@/components/cart";
import useCart from "@/utils/useCart";
import Dessert from "@/components/desserts/dessert";
import CartCard from "@/components/cart/cart-card";
import OrdersCart from "@/components/cart/orders-cart";
import { DessertI } from "@/types/Dessert";


export default function Home() {

  const { 
    cart, 
    addToCart,
    removeToCart,
    onNewOrder,
    onDescrementProduct,
    onIncrementProduct
  } = useCart()

  return (
    <main className="max-w-[980px] mx-auto py-10 flex flex-col lg:flex-row items-start px-6 lg:px-12 2xl:px-0 gap-8">

      <section className="h-full basis-8/12">
        <h1 className="text-3xl text-primaryRose-900 font-bold mb-6">Desserts</h1>
        <Desserts 
          desserts={desserts} 
          render={(dessert) => (
            <Dessert
              onDescrementProduct={onDescrementProduct}
              onIncrementProduct={onIncrementProduct}
              quantity={cart.find(c => c.id === dessert.id)?.quantity}
              inTheCart={cart.some(c => c.id === dessert.id)} 
              addToCart={addToCart} 
              dessert={dessert} 
            />
          )} 
        />
      </section>

      <section className="bg-orange-200 w-full lg:basis-1/3">
        <Cart onNewOrder={onNewOrder} cart={cart}>
          <OrdersCart 
            cart={cart}
            render={(dessert : DessertI) => (
              <CartCard 
                removeToCart={removeToCart}
                cart={dessert}
              />
            )}
          />
        </Cart>
        
      </section>
      
    </main>
  );
}
