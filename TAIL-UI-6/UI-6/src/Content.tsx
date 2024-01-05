import React from "react";
import img1 from "./assets/img/play.png";
import twitter from "../src/assets/img/twitter.png";
import face from "../src/assets/img/facebook (1).png";
import wats from "../src/assets/img/whatsapp (3).png";
import insta from "../src/assets/img/instagram (1).png";
import img2 from '../src/assets/img/abstract-liquid-background-illustration-free-vector.jpg'
import img3 from '../src/assets/img/white-unsplash-9d0375d2.jpg'

function Content() {
  return (
    <div className="p-24 py-12 flex justify-center items-center " style={{backgroundImage:`url(${img3})`}}>
      <div className="bg-[#101A33] p-12 py-2 text-white rounded-md">
        <div className="flex flex-col gap-10">
          <div className="text-center space-y-7 sm:flex justify-between px-10 pt-5">
            <p>
              <b>Viba</b>
            </p>
            <nav>
              <ul className="sm:flex gap-10">
                <li>Work</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center">
          <div className="text-white flex flex-col gap-8  p-7 tracking-widest">
            <div className="space-y-7 text-center sm:flex  flex-col gap-5 ">
              <p className="text-4xl sm:text-6xl">Create Brand</p>
              <p>We help startups to build & design their next product</p>
              <div className="space-y-4 text-center sm:flex gap-3 items-center">
                <button className="rounded-2xl bg-orange-600 text-white text-xs p-2 px-6">
                  Hire us
                </button>
                <button  className="bg-white rounded-full ">
                  <img src={img1} alt="" />
                </button>
                <p className="rounded-3xl bg-slate-900 p-1">Showreel</p>
              </div>
            </div>
            <div className="flex justify-between">
              <button className="bg-white rounded-full ">
                <img src={twitter} alt="" />
              </button>
              <button className="bg-white rounded-full ">
                <img src={face} alt="" />
              </button>
              <button className="bg-white rounded-full ">
                <img src={wats} alt="" />
              </button>
              <button className="bg-white rounded-full ">
                <img src={insta} alt="" />
              </button>
            </div>
          </div>
          <div className="max-w-[60%]">
            <img className="" src={img2} alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
