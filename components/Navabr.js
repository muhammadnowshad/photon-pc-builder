import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-5">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="">
          <div className="text-white text-lg font-semibold">Logo</div>
        </div>
        <div className={`search-Bar styles. hidden-mobile`}>
          <div className="relative">
            <input
              type="text"
              className="bg-gray-800 rounded-md py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Search..."
            />
            <button className="absolute text-white right-3 top-1/2 transform -translate-y-1/2">
              Search
            </button>
          </div>
        </div>
        <div className="flex items-center gap-x-10">
          <div className="dropdown">
            <div tabIndex={0} className="text-white">
              Category
            </div>
            <ul
              tabIndex={0}
              className="mt-4 z-[1] py-4 px-4 shadow menu menu-sm dropdown-content bg-base-100 rounded"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white">Account</p>
          </div>
          <div>
            <button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">
              PC Builder
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
