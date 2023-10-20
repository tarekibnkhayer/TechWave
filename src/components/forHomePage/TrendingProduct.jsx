import PropTypes from 'prop-types';

const TrendingProduct = ({product}) => {
    const {name, image} = product;
    return (
        <div className=''>
            <img src={image} alt=""  className='w-full h-full'/>
            <h2 className='text-xl text-center font-bold'>{name}</h2>
        </div>
    );
};

export default TrendingProduct;
TrendingProduct.propTypes = {
    product: PropTypes.object.isRequired
}