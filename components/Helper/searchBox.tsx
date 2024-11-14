import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { SearchIcon } from "lucide-react";

export default function SearchBox(){
    return(
        <Dialog>
            <DialogTrigger>
                <SearchIcon size={26} cursor={"pointer"}/>
            </DialogTrigger>
            <DialogContent>
                <form>
                    <input type="text"
                    placeholder="Search Product"
                    className="block w-full bg-gray-300 px-6 py-2 rounded-lg outline-none"/>
                </form>
            </DialogContent>
        </Dialog>
            
        
    )
}