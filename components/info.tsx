import { Product } from "@/types"
import Currency from "@/components/ui/currency";

interface InfoProps {
    data: Product;
}

const Info: React.FC <InfoProps> = ({
    data
}) => {
  return (
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
  )
}

export default Info