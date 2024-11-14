import Link from "next/link"
import Image from "next/image"
import SearchBox from "../Helper/searchBox"
import { HeartIcon, UserIcon } from "lucide-react"
import ShoppingCartButton from "../Helper/ShoppingCartButton"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
export default function Nav(){
    return(
        <div className="h-[12vh] sticky top-0 z-[1] bg-white shadow-md">
            <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-aotu h-full">
            {/* logo */}
            <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={140} height={140}/> </Link>
            {/* icons */}
            <div className="flex items-center space-x-6"> 
                {/* search box */}
                <SearchBox/>
                <HeartIcon size={26} cursor={"pointer"}/>
                {/* shopping cart  button */}
                <ShoppingCartButton/>
                {/* user button */}
                {/* sign in user */}
                <SignedIn>
                    <UserButton/>
                </SignedIn>
                {/* not sign in */}
                <SignedOut>
                    <SignInButton>
                    <UserIcon size={26} cursor={"pointer"}/>
                    </SignInButton>
                </SignedOut>
               
            </div>
            </div>
        </div>
    )
}