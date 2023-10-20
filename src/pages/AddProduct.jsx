import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddProduct = () => {
    const handleAddProduct= e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;
        const image = form.image.value;
        const product = {
            name, brand, type, rating, price, description, image
        };
        fetch('http://localhost:5010/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast("Product Added Successfully");
            }
        })
    }
    return (
        <div>
      <div className="bg-[#F4F3F0] rounded-md  md:p-20 w-2/3 mx-auto">
        <h1 className="text-5xl  font-normal text-[#374151] text-center font-Rancho">
          Add New Product
        </h1>
        <form className="card-body" onSubmit={handleAddProduct}>
          <div className="md:flex w-full gap-6">
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Product Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <select  name="brand" className="input input-bordered w-full">
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="Sony">Sony</option>
        <option value="Google">Google</option>
        <option value="Intel">Intel</option>
        <option value="Microsoft">Microsoft</option>
      </select>
            </div>
          </div>
          <div className="md:flex w-full gap-6">
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <input
                type="text"
                name="type"
                placeholder="Enter Type"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                name="rating"
                placeholder="Enter Rating (1-5)"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="md:flex w-full gap-6">
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter Price (TK)"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Enter Short Description"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="md:w-full">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="url"
              name="image"
              placeholder="Enter Image URL"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="add product"
              className="btn btn-primary font-Rancho"
            />
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
    );
};

export default AddProduct;