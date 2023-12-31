import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const product = useLoaderData();
  const { _id, image, name, brand, type, price, rating, description } = product;
  const handleAddToCart = (id) => {
    const email = user?.email;
    const cart = { email, id, name, price, brand };
    console.log(cart);
    fetch(
      `https://techwave-server-h2fyqkqh6-tarek-ibn-khayers-projects.vercel.app/carts`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cart),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Product Added Successfully");
        }
      });
  };
  return (
    <div className="border shadow-lg py-2">
      <div className="">
        <img src={image} alt="product image" className="w-1/2 mx-auto" />
      </div>
      <div className=" text-center space-y-6">
        <p className="md:text-7xl font-bold">
          <span className="text-blue-400">Product : </span> {name}
        </p>
        <div className="flex gap-4 justify-center">
          <p className="md:text-5xl font-medium text-slate-700">
            {" "}
            Brand: {brand} ||
          </p>
          <p className="md:text-5xl font-medium text-slate-700">
            Category: {type}
          </p>
        </div>
        <p className="md:text-6xl font-bold">Price: {price} tk</p>
        <Rating
          emptySymbol={
            <img src="https://i.imgur.com/obLLOhZ.png" className="icon w-10" />
          }
          fullSymbol={
            <img src="https://i.imgur.com/Yc4Lop6.jpg" className="icon w-10 " />
          }
          initialRating={parseInt(rating)}
          className="block"
        />
        <p className="md:text-xl">Short Description: {description}</p>
        <button
          onClick={() => handleAddToCart(_id)}
          className="bg-green-900 block mx-auto px-4 py-2 w-1/2 rounded-xl text-white hover:bg-green-400 text-2xl"
        >
          Add to Cart{" "}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
