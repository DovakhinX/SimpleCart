import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import { useCartStore } from '../stores/CartStore'

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
    quantity: number
}
const Homepage = () => {

    const [data, setData] = useState<Product[]>([])
    const [curPage, setCurPage] = useState(1)
    const { addToCart } = useCartStore()
    const itemPerPage = 5
    const totalItems = data?.length ?? 30
    const totalPages = Math.ceil(totalItems / itemPerPage)
    const pageRange = 3

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setData(data.products))
            .catch(error => console.error(error))
    }, [])

    const paginatedData = data?.slice((curPage - 1) * itemPerPage, curPage * itemPerPage)

    return (
        <>
            <Navbar />
            <main className='flex flex-col items-center pt-6'>
                <h1 className='font-bold font-mono text-2xl text-orange-400 '>Spring Sales !!</h1>
                <div className='flex flex-row gap-4 flex-wrap my-5 px-1 justify-center'>
                    {paginatedData?.map(product => {
                        return (
                            <Card
                                key={product.id}
                                title={product.title}
                                thumbnail={product.thumbnail}
                                id={product.id}
                                price={product.price}
                                onClick={() => addToCart(product)}
                            />
                        )
                    })}
                </div>
                <div className='flex flex-row gap-4'>
                    {curPage > 1 && <button onClick={() => setCurPage(curPage - 1)}>-</button>}
                    {Array.from(Array(totalPages).keys())
                        .slice(Math.max(curPage - Math.floor(pageRange / 2), 0),
                            Math.min(curPage + Math.floor(pageRange / 2) + 1, totalPages))
                        .map(page => (
                            <button onClick={() => setCurPage(page + 1)} className='border-2 border-black rounded-full px-2 '
                                style={{ background: curPage === page + 1 ? 'orange' : 'bisque' }}
                                key={page}
                            >{page + 1}</button>
                        ))}
                    {curPage < totalPages && <button onClick={() => { setCurPage(curPage + 1) }}>+</button>}
                </div>
            </main>
        </>
    )
}

export default Homepage