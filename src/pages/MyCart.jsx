import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const MyCart = () => {
  const { loading, user } = useContext(AuthContext);
  const [cart, setCart] = useState(null);
  useEffect(() => {
    fetch(
      `https://techwave-server-h2fyqkqh6-tarek-ibn-khayers-projects.vercel.app/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
        console.log(data);
      });
  }, [user.email]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://techwave-server-h2fyqkqh6-tarek-ibn-khayers-projects.vercel.app/carts/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = cart.filter((aCart) => aCart._id !== id);
              setCart(remaining);
            }
          });
      }
    });
  };
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  return (
    <div>
      <h1 className="text-center text-7xl font-Raleway font-bold text-green-500">
        Cart
      </h1>
      <hr />

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
            {cart &&
              cart.map((aCart) => (
                <tr key={aCart._id}>
                  <td>{aCart.name}</td>
                  <td>{aCart.brand}</td>
                  <td>{aCart.price} tk</td>
                  <td className="btn" onClick={() => handleDelete(aCart._id)}>
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
