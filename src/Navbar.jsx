import React from "react"

const Navbar = () => {
  return (
    <div className="shadow-md">
      <div className="flex justify-between items-center w-4/5 mx-auto">
        <div className="">
          <img src="/logo.avif" alt="" className="w-32" />
        </div>
        <div className="flex">
          <a href="#" className="px-10 py-5 hover:bg-black hover:text-white">
            Search
          </a>
          <a href="#" className="px-10 py-5 hover:bg-black hover:text-white">
            Offers
          </a>
          <a href="#" className="px-10 py-5 hover:bg-black hover:text-white">
            Help
          </a>
          <a href="#" className="px-10 py-5 hover:bg-black hover:text-white">
            Sign In
          </a>
          <a href="#" className="px-10 py-5 hover:bg-black hover:text-white">
            Cart
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
