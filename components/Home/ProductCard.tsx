"use client"
import Link from "next/link"
import { Product } from "../../typing"
import Image from "next/image"
import { Heart, ShoppingBag, StarIcon } from "lucide-react"
import { Button } from "../ui/button"
import { useDispatch} from "react-redux"
import { addItem } from "@/store/cartSlice"
import { useToast } from "@/hooks/use-toast"

type Props = {
    product: Product
}
export default function ProductCard({product}:Props){
    const num  = Math.round(product.rating.rate);
    const ratingArray = new Array(num).fill(0);
    const {toast} = useToast()
   

    const dispatch = useDispatch();

    const addToCartHandler = (product:Product) =>{
        toast({
            description: "Item added to cart",
            variant:'success',
        })
        dispatch(addItem(product))

    }
    return (
        <div className="p-4">
            <div className="w-[200px] h-[150px]">
            <Image 
            src={product.image}
            alt={product.title}
            width={100}
            height={100}
            className="w-[80%] h-[80%] object-contain"/>
            </div>
            <div>
                <p className="mt-5 text-xs capitalize text-gray-600">{product.category}</p>
                <Link href={`/product/product.details/${product.id}`}>
                <h1 className="text-lg cursor-pointer hover:text-blue-900 transition-all hover:underline
                sm:w-full sm:truncate mt-2 text-black font-semibold">
                    {product.title} </h1>
                    </Link>
                    {/* rating */}
                    <div className="flex items-center">
                        {ratingArray.map(()=>{
                            return <StarIcon key={Math.random()*1000} size={16} fill="yellow" 
                            className="text-yellow-500"/>

                        })}
                    </div>
                    {/* pricing */}
                    <div className="flex mt-2 space-x-2 items-center">
                        <p className="text-black text-base line-through font-semibold opacity-50">
                            {`$${(product.price + 10).toFixed(2)}`}</p>
                            <p className="text-black text-lg font-semibold opacity-80">${product.price}</p>
                    </div>
                    {/* Buttons */}
                    <div className="mt-4 flex items-center space-x-2">
                        <Button size={"icon"} variant={"destructive"} 
                        onClick={()=>{
                            addToCartHandler(product)
                        }}>
                            <ShoppingBag size={18} />
                            </Button>
                        <Button size={"icon"}>
                        <Heart size={18} />
                        </Button>


                        
                    </div>
            </div>
        </div>
    )
}