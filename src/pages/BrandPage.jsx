import { useLoaderData, useParams } from "react-router-dom";
import Slider from "../components/forBrandPage/Slider";
import Product from "../components/forBrandPage/Product";


const BrandPage = () => {
    const productsBasisOnBrand = useLoaderData();
    const brandName = useParams();
    return (
        <div>
            <Slider brandName={brandName} ></Slider>
           <div className="grid lg:grid-cols-2 gap-8 lg:max-w-6xl mx-auto">
           {
            productsBasisOnBrand.map(product => <Product key={product._id} product={product}></Product>)
           }
           </div>
        </div>
    );
};

export default BrandPage;