import logo from '../assets/android.svg'
import cart from '../assets/cart.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className='w-full bg-yellow-300 h-14 px-5 flex flex-row justify-between items-center border-b border-black'>
      <Link to={'/'}>
        <img src={logo} width={150} ></img>
      </Link>
      <Link to={'/cart'}>
        <img src={cart} width={30} ></img>
      </Link>
    </nav>
  )
}

export default Navbar;