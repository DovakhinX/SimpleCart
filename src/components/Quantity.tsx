import { useCartStore } from "../stores/CartStore";


type Props={
    qty:number,
    productId:number
}

const Quantity = ({qty,productId}:Props) => {

    const {increaseQty,decreaseQty} = useCartStore()



    return (
        <div className="flex flex-row border-2 rounded-lg border-black w-max gap-3 justify-center p-1">
            <p className="cursor-pointer" onClick={()=>decreaseQty(productId)}>-</p>
            <p>{qty}</p>
            <p className="cursor-pointer" onClick={()=>increaseQty(productId)}>+</p>
        </div>
    )
}

export default Quantity