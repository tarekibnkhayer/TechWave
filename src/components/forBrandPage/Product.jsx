import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, image, name, brand, type, price, rating} = product;
    return (
        <div className='border shadow-lg py-2'>
            <div className=' h-96'><img src={image} alt="product image"  className='w-full h-full'/>
            </div>
           <div className=' text-center space-y-3'>
            <p className='text-3xl font-bold'><span className='text-blue-400'>Product : </span>  {name}</p>
           <div className='flex gap-4 justify-center'>
           <p className='text-xl font-medium text-slate-700'> Brand: {brand}</p>
            <p className='text-xl font-medium text-slate-700'>Category: {type}</p>
           </div>
           <p className='text-2xl font-bold'>Price: {price} tk</p>
            <Rating
           emptySymbol={<img src="https://i.imgur.com/3jdUyDh.png" className="icon w-10" />}
           fullSymbol={<img src="https://i.imgur.com/Yc4Lop6.jpg" className="icon w-10 " />}
            initialRating={parseInt(rating)} className='block' />
            <Link to={`/${_id}`}><button className=' btn w-3/5 block mx-auto'>See Details</button></Link>
            <button className='bg-green-900 block mx-auto px-4 py-2 w-full rounded-xl text-white hover:bg-green-400'>Update </button>
           </div>
           
        </div>
    );
};

export default Product;
Product.propTypes = {
    product: PropTypes.object.isRequired
}