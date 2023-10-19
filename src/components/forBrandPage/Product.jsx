import PropTypes from 'prop-types';

const Product = ({product}) => {
    console.log(product);
    return (
        <div>
            
        </div>
    );
};

export default Product;
Product.propTypes = {
    product: PropTypes.object.isRequired
}