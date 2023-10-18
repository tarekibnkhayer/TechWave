import PropTypes from 'prop-types'; 

const BrandCard = ({brand}) => {
    const {brandName, img} = brand;
    return (
        <div className='bg-[#FFF] rounded-xl border border-slate-200 p-4 shadow-xl space-y-3'>
            <img src={img} alt="brand img" className='w-full h-96' />
            <h2 className='text-4xl text-center font-black font-Raleway'>{brandName}</h2>
        </div>
    );
};

export default BrandCard;
BrandCard.propTypes = {
    brand: PropTypes.object.isRequired
}