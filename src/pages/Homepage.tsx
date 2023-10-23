import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import  {useCartStore} from '../stores/CartStore'

export interface Product {
    id: number;
    title: string;
    price: number;
    stock: number;
    brand: string;
    rating: number;
    category: string;
    thumbnail: string;
    description: number;
    discountPercentage: number;
    quantity:number
}
const Homepage = () => {

    const [data, setData] = useState<Product[]>([])
    const{addToCart}=useCartStore()

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setData(data.products))
            .catch(error => console.error(error))
    }, [])



    return (
        <>
            <Navbar />
            <main className='flex flex-col items-center pt-6'>
                <h1 className='font-bold font-mono text-2xl text-orange-400 '>Spring Sales !!</h1>
                <div className='flex flex-row gap-4 flex-wrap my-5 px-1 justify-center'>
                    {data?.map(product => {
                        return (
                            <Card
                                key={product.id}
                                title={product.title}
                                thumbnail={product.thumbnail}
                                id={product.id}
                                price={product.price}
                                onClick={()=>addToCart(product)}

                                />
                        )
                    })}
                </div>
            </main>
        </>
    )
}

export default Homepage