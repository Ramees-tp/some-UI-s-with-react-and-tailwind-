import React from "react";
import img2 from "../src/assets/img/lap-2.jpg";
import icon1 from "../src/assets/img/components.png";
import icon2 from "../src/assets/img/browser.png";
import icon3 from "../src/assets/img/js.png";
import icon4 from "../src/assets/img/google.png";

function Footer() {
  return (
    <div>
      <div className="p-8 bg-zinc-200 flex items-center justify-center">
        <div className=" sm:flex">
          <div className="sm:max-w-[50%] flex flex-col items-center justify-center">
           <div className="sm:max-w-[40%] rounded-t overflow-hidden"> <img src={img2} alt="" /></div>
           <div className="sm:max-w-[40%] p-2 bg-pink-600 text-white rounded-b"><p><b>Great for your awesome project</b></p><p className="text-xs text-slate-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur quos error, quia, recusandae laborum perspiciatis autem blanditiis non earum repudiandae id magni voluptate aliquid atque reprehenderit ipsum assumenda voluptatibus ea.</p></div>
          </div>
          <div className="grid-col-1 grid-row-4  sm:grid grid-cols-2 grid-rows-2 max-w-[50%]">
            <div className="border p-5">
              <div className="bg-white rounded-full w-10 p-2 shadow-xl">
                <img src={icon1} alt="" />
              </div>
              <h1>
                <b>CSS Components</b>
              </h1>
              <p className="text-sm text-slate-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, odit quam numqua
              </p>
            </div>
            <div className="border p-5">
              <div className="bg-white rounded-full w-10 p-2 shadow-xl">
                <img src={icon2} alt="" />
              </div>
              <h1>
                <b>Pages</b>
              </h1>
              <p className="text-sm text-slate-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, odit quam numqua
              </p>
            </div>
            <div className="border p-5">
              <div className="bg-white rounded-full w-10 p-2 shadow-xl">
                <img src={icon3} alt="" />
              </div>
              <h1>
                <b>Javascript Components</b>
              </h1>
              <p className="text-sm text-slate-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, odit quam numqua
              </p>
            </div>
            <div className="border p-5">
              <div className="bg-white rounded-full w-10 p-2 shadow-xl">
                <img src={icon4} alt="" />
              </div>
              <h1>
                <b>Documentation</b>
              </h1>
              <p className="text-sm text-slate-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, odit quam numqua
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
