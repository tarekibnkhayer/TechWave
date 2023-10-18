import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navLinks = <>
    <NavLink to='/' className='text-xl ml-24'>Home</NavLink>
    <NavLink to='/' className='text-xl ml-24'>Add Product</NavLink>
    <NavLink to='/' className='text-xl ml-24'>My Cart</NavLink>
    <NavLink to='/' className='text-xl ml-24'>Register</NavLink>
    <NavLink to='/' className='text-xl ml-24'>Login</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 mt-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <img src="https://i.imgur.com/PkDLHQB.jpg" alt="" className="w-24" />
    <a className=" normal-case text-3xl font-bold">TechWave</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink to='/login' className='mr-2 text-lg'>Login</NavLink>
   <img src="https://i.imgur.com/BSXLY0r.png" alt=""  className="w-12"/>
  </div>
</div>
    );
};

export default Navbar;