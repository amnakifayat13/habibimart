import Image from "next/image"
export default function Footer(){
    return (
        <div className="pt-16 pb-12">
            {/* define grid system */}
            <div className="w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1
            md:grid-cols-2 lg:grid-cols-4 gap-12 ">
                {/* first part */}
                <div>
                    <h1 className="text-[25px] uppercase font-semibold text-black mb-4">Habibi Mart</h1>
                    <p className="text-sm text-black opacity-60">enjoy shopping with a happy day!</p>
                    <p className="text-base text-black opacity-80"> +90-0300-0000000-info@habibimart.com</p>
                </div>
                <div>
                    {/* 2nd part */}
                    <div className="lg:mx-auto"></div>
                    <h1 className="footer__title">Information</h1>
                    <p className="footer__link">About us</p>
                    <p className="footer__link">Privacy Policy</p>
                    <p className="footer__link">Return Policy</p>
                    <p className="footer__link">Dropshipping</p>
                    <p className="footer__link">Shipping Policy</p>
                </div>
                <div>
                    {/* 3rd part */}
                    <div className="lg:mx-auto"></div>
                    <h1 className="footer__title">Account</h1>
                    <p className="footer__link">Dashboard</p>
                    <p className="footer__link">My orders</p>
                    <p className="footer__link">Account details</p>
                    <p className="footer__link">Track Orders</p>
                  

                </div>
                <div>
                    {/* 4th part */}
                    <div className="lg:mx-auto"></div>
                    <h1 className="footer__title">Shop</h1>
                    <p className="footer__link">Affiliate</p>
                    <p className="footer__link">Best Sellers</p>
                    <p className="footer__link">Latest Products</p>
                    <p className="footer__link">Sale Products</p>
                </div>
            </div>
            <div>
                {/* copyright */}
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto">
                <p className="text-black opacity-60 text-sm">© Copyright Habibi Mart 2024</p>
                <Image src="/images/pay.svg" alt="pay" width={230} height={230}
                className="object-contain sm:ml-auto"/> 
                
                </div>
            </div>
        </div>
    )
}