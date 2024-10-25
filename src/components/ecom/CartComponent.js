import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useContext, useState } from 'react'
import AppContext from '../../context/AppContext/AppContext'
import CartItem from './CartItem'

export default function CartComponent() {
  const {isCartOpen, setIsCartOpen,cartItems} = useContext(AppContext)
  return (
    <>
      <Dialog
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        className="relative z-50"
      >
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/30 transition-opacity" aria-hidden="true" />

        {/* Dialog position */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-end text-center">
            <DialogPanel
              className={`w-full max-w-md h-screen transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all
                ${isCartOpen ? 'translate-x-0' : '-translate-x-full'} duration-300 ease-out`}
            >
              <DialogTitle className="text-lg font-medium leading-6 text-gray-900">
                Your Cart
              </DialogTitle>
              <div className="mt-2">
                {/* <p className="text-sm text-gray-500">
                  Your cart items will be displayed here.
                </p> */}

                {cartItems.length === 0 && <p>No items in the cart</p>}

                {cartItems.map((item)=>{
                    return <CartItem key={item.id} {...item}/>
                })}
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={() => setIsCartOpen(false)}
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
