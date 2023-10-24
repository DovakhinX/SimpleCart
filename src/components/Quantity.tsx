import { useCartStore } from "../stores/CartStore";
import trash from '../assets/trash.svg'

type Props = {
    qty: number,
    productId: number
}

const Quantity = ({ qty, productId }: Props) => {

    const { increaseQty, decreaseQty, removeFromCart } = useCartStore()

    return (
        <div className="flex flex-row border-2 rounded-lg border-black w-max gap-3 justify-center p-1">
            {qty <= 1 ? <img src={trash} alt="trash" width={18} className="cursor-pointer" onClick={() => removeFromCart(productId)} /> :
                <p className="cursor-pointer" onClick={() => decreaseQty(productId)}>-</p>}
            <p>{qty}</p>
            <p className="cursor-pointer" onClick={() => increaseQty(productId)}>+</p>
        </div>
    )
}

export default Quantity