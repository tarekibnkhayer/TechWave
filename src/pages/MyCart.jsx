import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";


const MyCart = () => {
    const {loading, user} = useContext(AuthContext);
    const [cart, setCart] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5010/${user.email}`)
        .then(res => res.json())
        .then(data => {setCart(data)
        console.log(data)});
    },[user.email]);
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
            <td className="btn">Delete</td>
          </tr>)
      }
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyCart;