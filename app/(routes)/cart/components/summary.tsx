"use client"

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

const Summary = () => {

    const searchParams = useSearchParams();
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);

    useEffect(() => {
        if (searchParams.get("success")) {
            toast.success("Pago completado");
            removeAll();
        }

        if (searchParams.get("canceled")) {
            toast.error("Algo ha fallado")
        }
    }, [searchParams, removeAll]);

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price);
    }, 0);

    const onCheckout = async () => {
        const response = await axios.post(`${process.env.
            NEXT_PUBLIC_API_URL}/checkout`, {
                productsId: items.map((item) => item.id)
            });

            window.location = response.data.url;
    }

    return (
        <div className="
        mt-16
        rounded-lg
        bg-gray-50
        px-4
        py-6
        sm:p-6
        lg:col-span-5
        lg:mt-0
        lg:p-8
        ">
            <h2 className="text-lg font-medium text-slate-950 text-center">
                Tu pedido
            </h2>
            <div className="mt-6 spacey-4">
                <div className="flex items-center justify-between border-t border-slate-950 pt-4">
                    <div className="text-base font-medium text-slate-950">
                        Total del pedido:
                    </div>
                    <Currency value={totalPrice} />
                </div>
                <Button onClick={onCheckout} className="w-full mt-6 bg-slate-900 hover:bg-[#69f0ae] hover:text-slate-950">
                    Checkout
                </Button>
            </div>
        </div>
    )
}

export default Summary;