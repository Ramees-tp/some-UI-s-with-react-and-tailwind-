import React from "react";
import img1 from "../src/assets/pic/442293.jpg";
import icon1 from "../src/assets/pic/facebook-app-symbol.png";
import icon2 from "../src/assets/pic/twitter.png";
import icon3 from "../src/assets/pic/instagram (1).png";

function Header() {
  return (
    <div>
      <div>
        <div className="sm:flex bg-[#020927]">
          <div className="text-center sm:w-[30%] sm:p-8 text-white font-bold sm:relative">
            <h1>YOUR LOGO</h1>
            <div className=" text-white border-l-4 sm:pl-5 ml-14 top-56  sm:min-w-[100%] space-y-3 absolute ">
            <h1 className="text-5xl sm:text-9xl font-bold tracking-tight ">DISCOVER</h1>
            <h1 className="text-4xl sm::text-8xl font-bold text-slate-400 tracking-tight">NEWPLACES</h1>
            <p className="text-xs ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              expedita, esse sed sapiente aut veniam pariatur voluptate ex
              repellendus quam tenetur libero quasi doloribus deleniti suscipit
              alias enim aliquid corporis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nostrum harum possimus odio, eos culpa quaerat itaque, eaque explicabo, repudiandae rerum vitae quod .
            </p>
            <button className="text-xs bg-blue-600 py-2 px-3">CLICK HERE</button>
          </div>
          </div>
          
          <div
            className="bg-cover text-center sm:w-[70%] space-y-[55%]"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <nav>
              <ul className="text-cyan-950 p-8 text-xs sm:flex gap-10 justify-end">
                <li>
                  <b>HOME </b>
                </li>
                <li>
                  <b>ABOUT US</b>
                </li>
                <li>
                  <b>SERVICES</b>
                </li>
                <li>
                  <b>CONTACT</b>
                </li>
              </ul>
            </nav>
            <div className="sm:flex justify-end pr-10 pb-11 gap-7">
              <img src={icon1} alt="" />
              <img src={icon2} alt="" />
              <img src={icon3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
