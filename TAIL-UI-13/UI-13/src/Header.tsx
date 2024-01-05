import React from "react";
import search from "../src/assets/img/magnifying-glass.png";
import img from "../src/assets/img/Screenshot (18).png";
import bg from '..//src/assets/img/green-background-4.png'

function Header() {
  return (
    <div className="md:p-20 md:px-32 bg-cover" style={{backgroundImage:`url(${bg})`}}>
      <div className="p-10 bg-green-300">
        <div >
          <nav>
            <ul className="flex flex-col items-center justify-center lg:flex lg:flex-row gap-12 lg:justify-between">
              <li>GRAPHICSFAMILY</li>
              <div className="flex flex-col justify-center items-center space-y-5  lg:flex lg:flex-row lg:space-x-14">
                <li>
                  <button className=" px-3 bg-green-950 text-white rounded-xl">
                    HOME
                  </button>
                </li>
                <li>ABOUT US</li>
                <li>PRODUCT</li>
                <li>SERVICES</li>
                <li>GALLERY</li>
                <li> BLOG</li>
                <li>
                  <img src={search} alt="" />
                </li>
              </div>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between p-10">
          <div className="space-y-10 text-center">
            <div>
              <h1 className="font-bold tracking-widest text-3xl">
                SPECIAL DEAL
              </h1>
              <h1 className="text-8xl font-semibold tracking-tighter">
                NEW STYLE
              </h1>
              <p className="tracking-widest text-gray-700">HOME FASION STORE</p>
            </div>
            <button className="bg-green-400 p-4 px-10 font-medium text-2xl shadow-2xl rounded">
              SHOP NOW
            </button>
            <p>
              <b>www.graphicsfamily.com</b>
            </p>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
