import { useStore } from '@/providers/StoreProvider'
import CartCheckoutItem from './CartCheckoutItem'

const CartCheckoutCollection = () => {
  const { cart, cartCount, totalAmount } = useStore();

  return (
    <div>
      <div className='flex flex-col gap-y-4'>
        {cart.map(cart => (
            <CartCheckoutItem 
                key={cart.title}
                product={cart}
            />
        ))}
      </div>

      <footer className='mt-8 bg-gray-100/50 border border-gray-200 p-2.5 rounded-lg'>
        <ul className='space-y-1.5'>
          <li className='flex items-center justify-between'>
            <p className='text-[.93rem] text-gray-700 font-medium'>
              Subtotal{" "}
              <span className="text-gray-500 font-normal">({cartCount} item):</span>
            </p>

            <p className='font-nunito font-semibold text-[.92rem]'>${totalAmount.toLocaleString()}</p>
          </li>

          <li className='flex items-center justify-between'>
            <p className='text-[.93rem] text-gray-700 font-medium'>Shipping cost</p>

            <p className='font-nunito font-semibold text-[.92rem]'>Free</p>
          </li>

          <li className='flex items-center justify-between'>
            <p className='text-[.93rem] text-gray-700 font-medium'>Total</p>

            <p className='font-nunito font-semibold text-[.92rem]'>
              ${totalAmount.toLocaleString()} {" "}
              <span className='uppercase text-gray-500 text-[.72rem]'>usd</span>
            </p>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default CartCheckoutCollection