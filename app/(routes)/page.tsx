import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";


export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true});
    const billboard = await getBillboard("f535ded9-9239-4c8e-86b5-cf28baa98163");
    return (

    <Container>
        <div className="space-y-10 pb-10">
            <Billboard data={billboard}/>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Productos destacados" items={products} />
        </div>
    </Container>

    );
    
}

export default HomePage;