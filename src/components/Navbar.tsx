import logo from '../assets/android.svg'
import cart from '../assets/cart.svg'
import cart2 from '../assets/cart-outline.svg'
import { Link } from 'react-router-dom'
import { useCartStore } from '../stores/CartStore'

const Navbar = () => {

  const { cartItems } = useCartStore()

  return (
    <nav className='w-full bg-yellow-300 h-14 px-5 flex flex-row justify-between items-center border-b border-black'>
      <Link to={'/'}>
        <img src={logo} width={150} ></img>
      </Link>
      <Link to={'/cart'}>{
        cartItems.length > 0 ?
          <img src={cart} width={30} className='shaker' ></img> : <img src={cart2} width={30} ></img>
      }
      </Link>
    </nav>
  )
}

export default Navbar;