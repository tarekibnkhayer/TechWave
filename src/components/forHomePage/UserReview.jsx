import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserReview = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const handleUser = (e) => {
    e.preventDefault();
    const commentText = e.target.comment.value;
    const comment = { commentText, userEmail };
    fetch(
      `https://techwave-server-h2fyqkqh6-tarek-ibn-khayers-projects.vercel.app/comments`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(comment),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Your comment submitted successfully");
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <p className="text-center text-3xl mt-10 mb-4 font-bold text-green-700">
        We Want to Hear from You
      </p>
      <hr />
      <form className="flex flex-col" onSubmit={handleUser}>
        <input
          type="text"
          name="comment"
          id=""
          className="input input-bordered w-full md:w-1/2 lg:ml-72 h-40 mt-10"
          placeholder="Leave us a comment"
        />
        <input
          type="submit"
          value="Submit"
          className="bg-green-950 md:w-32 w-24  md:mx-auto text-white px-4 py-2 rounded-lg text-xl hover:bg-green-400"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default UserReview;
