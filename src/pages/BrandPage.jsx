import { useLoaderData, useParams } from "react-router-dom";
import Slider from "../components/forBrandPage/Slider";
import Product from "../components/forBrandPage/Product";


const BrandPage = () => {
    const productsBasisOnBrand = useLoaderData();
    const brandName = useParams();
    return (
        <div>
            <Slider brandName={brandName} ></Slider>
           {
            productsBasisOnBrand.map(product => <Product key={product._id} product={product}></Product>)
           }
        </div>
    );
};

export default BrandPage;