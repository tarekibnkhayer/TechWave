import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const Slider = ({brandName}) => {
    const [sliders, setSliders] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5010/brands`)
        .then(res => res.json())
        .then(data => {
            const requiredData = data.find(datum => datum.brandName === brandName.brandName);
            setSliders(requiredData);
        });
    }, [brandName]);
    return (
        <div>
            
            {
                sliders && <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[800px]">
                  <img src={sliders.slide1} className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                  </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full h-[800px]">
                  <img src={sliders.slide2} className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                  </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full h-[800px]">
                  <img src={sliders.slide3} className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                  </div>
                </div> 
                {/* <div id="slide4" className="carousel-item relative w-full">
                  <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                  </div>
                </div> */}
              </div>
            }
        </div>
    );
};

export default Slider;

Slider.propTypes = {
    brandName: PropTypes.object.isRequired
}