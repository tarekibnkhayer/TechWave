import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const BrandCard = ({brand}) => {
    const {brandName, img} = brand;
    return (
        <Link to={`/brands/${brandName}`}>
        <div className='bg-[#FFF] rounded-xl border border-slate-200 p-4 shadow-xl space-y-3'>
            <img src={img} alt="brand img" className='w-full h-96' />
            <h2 className='md:text-4xl text-center font-black font-Raleway text-xl'>{brandName}</h2>
        </div>
        </Link>
    );
};

export default BrandCard;
BrandCard.propTypes = {
    brand: PropTypes.object.isRequired
}