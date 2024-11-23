import { getProductByCategory, getSingleProduct } from "@/Request/Request"
import { Product } from "../../../../../typing"
import Image from "next/image"
import { StarIcon } from "lucide-react"
import AddToCart from "./add.cart"
import ProductCard from "@/components/Home/ProductCard"
export default async function ProductDetails({params}:{ params: Promise<{ id: string }> }){
    const { id } = await params
    const singleProduct:Product = await getSingleProduct(id)
    const relatedProduct:Product[] = await getProductByCategory(singleProduct.category) ;

    const num = Math.round(singleProduct?.rating?.rate);
    const starArray = new Array(num).fill(0);
    console.log({ singleProduct, relatedProduct })
    return (
        // rating
        <div className="mt-20">
            {/* define a grid system */}
            <div className="w-4/5 mx-auto grid grid-cols-1  lg:grid-cols-7 items-center gap-4">
            {/* image */}
            <div className="col-span-3 mb-6 lg:mb-0">
                <Image src={singleProduct.image} alt={singleProduct.title} width={400} height={400}/>
            </div>
            {/* content */}
            <div className="col-span-4">
                <h1 className="lg:text-3xl text-2xl font-bold text-black">
                    {singleProduct.title}
                </h1>
                <div className="mt-2 flex items-center space-x-2">
                    <div className="flex items-center">
                        {starArray.map(()=>{
                            return <StarIcon key={Math.random()*5000} size={20} fill="yellow"
                            className="text-yellow-600"/>
                        })}
                    </div>
                    <p className="text-base text-gray-700 font-semibold">({singleProduct?.rating?.count} Reviews)</p>
                </div>
                {/* line */}
                <span className="w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4"></span>
                <h1 className="lg:text-6xl text-3xl md:text-4xl font-bold text-blue-950">
                    ${singleProduct?.price.toFixed(2)}</h1>
                    {/* description */}
                    <p className="mt-4 text-base text-black opacity-70">
                        {singleProduct?.description}
                    </p>
                    <p className="mt-4 text-sm text-black text-opacity-70 font-semibold">
                        Category: {singleProduct?.category}
                    </p>
                    <p className="mt-4 text-sm text-black text-opacity-70 font-semibold">
                        Tag:HabibiMart
                    </p>
                    <p className="mt-4 text-sm text-black text-opacity-70 font-semibold">
                        SKU: {Math.random() * 500}
                    </p>
                    {/* add to cart */}
                    <AddToCart product = {singleProduct}/>

            </div>
            </div>
            <div className="w-4/5 mt-16 mx-auto">
            <h1 className="text-2xl text-black font-semibold"> Related Products</h1>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                {relatedProduct.map((product) => {
                    return < ProductCard key={product.id} product={product}/>
                })}
            </div>

            </div>
        </div>
        // 
    )
}