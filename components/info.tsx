"use client"

import { Product } from "@/types"
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react"
import useCart from "@/hooks/use-cart";

interface InfoProps {
    data: Product;
}

const Info: React.FC <InfoProps> = ({
    data
}) => {

    const cart = useCart();

    const onAddTocart = () => {
        cart.addItem(data);
    }
  return (
    <>
    <div className="flex flex-col justify-center text-center">
        <h1 className="text-3xl font-bold text-slate-600">{data.name}</h1>
        <h4 className="font-light text-slate-900 ">Envío y devoluciones gratis.</h4>
        <div className="flex flex-col justify-center text-center">
            <p className="text-2xl text-slate-700">
                <Currency value={data?.price}/>
            </p>
        </div>
        <hr className="my-4"/>
        <div className="flex flex-col justify-center text-center">
            <h3 className="font-semibold text-slate-600">Talla: {data?.size?.name}</h3>
        </div>
    </div>
    
    <div className="flex items-center gap-x-4 justify-center pt-2">
          <h3 className="font-semibold text-slate-600">Color:</h3>
          <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
        </div>
    <div className="w-full h-full relative flex justify-center p-10 ">
            <Button onClick={onAddTocart} className="flex items-center gap-x-2 bg-black hover:bg-[#03cc99] transition-background duration-300">
                Comprar
                <ShoppingCart />
            </Button>
            </div>
    </>
  )
}

export default Info