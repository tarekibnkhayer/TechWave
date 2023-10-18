

const Banner = () => {
    return (
        <div className="relative">
            <img src="https://i.imgur.com/Yt25sSb.jpg" alt="banner image" className="w-full lg:h-[700px]" />
            <div className="absolute -top-10 left-0 right-0 bottom-0 flex flex-col justify-center items-center space-y-4">
            <p className="text-white text-7xl font-bold">Riding the waves of innovation</p>
            <p className="text-white text-lg font-semibold italic"> Explore the Latest in Tech and Electronics from Top Brands.
            <br />
            Unleash the Power of Cutting-Edge Gadgets and Gear.
            <br />
            Your Journey into the Future Begins Here.</p>
            <button className="bg-amber-950 p-4 text-2xl  text-white rounded-xl lg:w-[500px] hover:bg-amber-600 font-Raleway">Shop Now</button>
            </div>
        </div>
    );
};

export default Banner;