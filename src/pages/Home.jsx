import { useLoaderData } from "react-router-dom";
import Banner from "../components/forHomePage/Banner";
import BrandCard from "../components/forHomePage/BrandCard";


const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
            <Banner></Banner>
           <div className="lg:max-w-6xl mx-auto mt-20">
           <div className="grid grid-cols-2 gap-24">
                {
                    brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                }
            </div>
           </div>
        </div>
    );
};

export default Home;