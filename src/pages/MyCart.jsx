import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyCart = () => {
    const {loading, user} = useContext(AuthContext);
    const [cart, setCart] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5010/${user.email}`)
        .then(res => res.json())
        .then(data => {setCart(data)
        console.log(data)});
    },[user.email]);
    const handleDelete = id => {
        console.log(id);
        fetch(`http://localhost:5010/carts/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                toast('This product successfully deleted from your cart');
                const remaining = cart.filter(aCart => aCart._id !== id);
                setCart(remaining);
            }
        })
    }
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    return (
        <div>
            {/* <h1 className="text-center text-7xl font-Raleway font-bold text-green-500">Cart</h1>
            <hr /> */}
           
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Product Name</th>
        <th>Brand Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        cart && cart.map(aCart =>  <tr key={aCart._id}>
            <td>{aCart.name}</td>
            <td>{aCart.brand}</td>
            <td>{aCart.price} tk</td>
            <td className="btn" onClick={() => handleDelete(aCart._id)}>Delete</td>
          </tr>)
      }
     
     
    </tbody>
  </table>
</div>
<ToastContainer />
        </div>
    );
};

export default MyCart;