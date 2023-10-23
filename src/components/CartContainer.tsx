import Cart from '../assets/cart.svg'
import Quantity from './Quantity';
import { useCartStore } from "../stores/CartStore";




const CartContainer = () => {

    const { cartItems, removeFromCart } = useCartStore();

    const subtotal = cartItems.reduce((acc, item) => {
        const itemTotal = item.price * (item.quantity ?? 1);
        return acc + itemTotal;
    }, 0);


    return (
        <div className="flex flex-col bg-orange-300 gap-4 rounded-lg  w-[300px]   sm:w-[700px]  lg:w-4/5 h-max my-8 sm:px-8 py-4 justify-center items-center border-2 border-black  ">
            <div className='flex flex-row gap-2'>
                <img src={Cart} alt="cart" width={25} />
                <h1 className='text-2xl'>Your Cart</h1>
            </div>
            <div className='bg-yellow-300 w-full h-max rounded-lg flex flex-col py-2 sm:px-4  border-2 border-black  '>
                <table>
                    <thead>
                        <tr className='text-left lg:text-base  text-[8px]'>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.length > 0 ? (cartItems?.map((item) => (
                            <tr className='text-left lg:text-base  text-[8px]'>
                                <th className='flex flex-col items-start gap-1 '>
                                    <img src={item?.thumbnail} alt='prodImage'
                                        style={{ objectFit: 'cover', width: '100px', height: '100px', borderRadius: '10px', border: '1px solid black' }} />
                                    <p>{item?.title}</p>
                                </th>
                                <th>${item?.price}</th>
                                <th><Quantity qty={item?.quantity ?? 1} productId={item?.id} /></th>
                                <th>${(item?.price) * (item?.quantity ?? 1)}</th>
                                <th><button onClick={() => removeFromCart(item?.id)}
                                    className='border-2 rounded-xl border-red-400 p-1 text-red-400 w-6 '>X</button></th>
                            </tr>))) : (<p className='text-center'>Your Cart is Empty...</p>)}
                    </tbody>
                </table>
            </div>
            <div className='flex flex-col items-center w-[200px] sm:w-1/4 bg-yellow-300 rounded-lg sm:self-end border-2 border-black lg:text-base  text-[8px] '>
                <div className='flex flex-row justify-between w-full  p-1 sm:p-2  '>
                    <p className='font-bold'>Subtotal</p>
                    <p>${subtotal}</p>
                </div>
                <div className='flex flex-row justify-between w-full  p-1 sm:p-2'>
                    <p className='font-bold'>Tax 5%</p>
                    <p>${subtotal * 5 / 100}</p>
                </div>
                <div className='flex flex-row justify-between w-full  p-1 sm:p-2'>
                    <p className='font-bold'>Grand Total</p>
                    <p>${subtotal + (subtotal * 5 / 100)}</p>
                </div>
            </div>
            <button className='bg-yellow-300 hover:bg-yellow-300 rounded-md p-2 font-bold sm:self-end border-2 border-black lg:text-base  text-[9px]  '>Check out</button>
        </div>
    )
}

export default CartContainer;