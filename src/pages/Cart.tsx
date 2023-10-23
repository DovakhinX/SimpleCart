import Navbar from "../components/Navbar";
import CartContainer from "../components/CartContainer";


const Cart = () => {


    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center">
                 <CartContainer/>
            </div>
        </>

    )
}

export default Cart;