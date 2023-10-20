import { useLoaderData } from "react-router-dom";
import Banner from "../components/forHomePage/Banner";
import BrandCard from "../components/forHomePage/BrandCard";
import UserReview from "../components/forHomePage/UserReview";
import { useEffect, useState } from "react";
import TrendingProduct from "../components/forHomePage/TrendingProduct";


const Home = () => {
    const brands = useLoaderData();
    const [trendingProducts, setTrendingProducts] = useState(null);
    const [modeStyle, setModeStyle] = useState({
        color:'black',
        backgroundColor: 'white'
    });
    const [buttonText, setButtonText] = useState('Enable Dark Mode');
    const yes = 'yes';
    useEffect(() => {
        fetch(`http://localhost:5010/trending/${yes}`)
        .then(res => res.json())
        .then(data => {
            setTrendingProducts(data);
        });
    },[]);
    const handleToggleMode = () => {
        console.log("hello");
        if(modeStyle.color == 'black'){
            setModeStyle({
                color:'white',
                backgroundColor: 'black'
            });
            setButtonText("Enable Light Mode")
        }
        else{
           setModeStyle({
            color:'black',
            backgroundColor: 'white'
           });
           setButtonText("Enable Dark Mode");
        }
    }
    return (
        <div style={modeStyle}>
            <Banner></Banner>
           <div className="lg:max-w-6xl  md:max-w-2xl max-w-xs mx-auto mt-20">
           <div className="grid md:grid-cols-3 gap-24">
                {
                    brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                }
            </div>
            <UserReview ></UserReview>
            <p className="text-center text-5xl my-10 text-yellow-900 font-Raleway font-extrabold">Our Trending Products</p>
            <hr className="border-[2px]" />
            <div className="grid lg:grid-cols-4 md:grid-cols-2 mb-24 mt-10">
                {
                 trendingProducts &&   trendingProducts.map(product => <TrendingProduct key={product._id} product={product}></TrendingProduct>)
                }
            </div>
           </div>
           <button className="btn btn-secondary" onClick={handleToggleMode}>{buttonText}</button>
        </div>
    );
};

export default Home;