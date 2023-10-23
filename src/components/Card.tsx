
interface Props {
  id: number;
  title: string;
  description?: number;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail: string;
  onClick: () => void;
}
const Card = ({ id, title, thumbnail, price, onClick }: Props) => {

  return (
    <div className="flex flex-col p-3 bg-orange-100 gap-1 rounded-lg border border-black" key={id}>
      <img src={thumbnail} alt='prodImage' width={280} height={280}
        style={{ objectFit: 'cover', width: '280px', height: '280px', borderRadius: '10px',border: '1px solid black' }} />
      <p className="font-bold text-sm">{title}</p>
      <p className="font-bold text-sm">Price: ${price}</p>
      <button className="bg-yellow-400 hover:bg-yellow-300 rounded-md p-2 font-bold border border-black  " onClick={onClick}>Add to Cart</button>
    </div>
  )
}

export default Card;