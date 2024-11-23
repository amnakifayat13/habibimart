"use client"
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { addItem } from "@/store/cartSlice";
import { Product } from "@/typing";
import { useDispatch } from "react-redux";

export default function AddToCart({product}:{product:Product}){
    const dispatch = useDispatch();

    const { toast} = useToast()

    const addCartHandler = ()=> {
        toast({
            description : "Item add to cart",
            variant: "success",
        })
        dispatch(addItem(product))
    }



    return(
        <Button onClick = {() =>{addCartHandler()}}className="mt-6 bg-red-600 hover:bg-slate-950 hover:text-white"> Add to cart</Button>
    )
}