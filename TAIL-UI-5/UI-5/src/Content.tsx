import React from "react";
import img1 from "./assets/AI Powered Cloud Computing.jpg";
import off from './assets/offer.png'
import ai from './assets/ai.jpeg'

function Content() {
  return (
    <div>
      <div className="p-16 px-24 bg-contain" style={{backgroundImage:`url(${img1})` }}>
        <div className="rounded-lg bg-gray-800 text-white px-28 py-12 flex flex-col gap-10 bg-cover" style={{ backgroundImage: `url(${ai})` }}>
          <div className="md:flex justify-between">
            <div>
              <p>
                <b>Best</b>Server
              </p>
            </div>
            <nav>
              <ul className="md:flex items-center place-content-between gap-[2vw]">
                <li>Domain</li>
                <li>Hosting</li>
                <li>cloud</li>
                <li>Dedicated</li>
                <li>Email</li>
                <li>
                  <button className="border-2 rounded-xl px-5">Log In</button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center justify-between">
            <div className="max-w-[55%]">
              <div>
                <p>Welcome To The Best server Expert Performance</p>
                <p className="text-5xl">Secure Cloud Hosting For Everyone</p>
              </div>
             <div className="md:flex items-center">
             <div>
                <p>27/7 knowlageble support </p>
                <p>Free opened setup</p>
                <p>Free one year domain</p>
                <p>Website builder</p>
                <p>Website study in 10 minutes</p>
                <p>Money back guarantee</p>
              </div>
              <div>
                <img src={off} alt="" />
              </div>
             </div>
              <div className="md:relative flex items-center">
                <input
                  className=" rounded-2xl px-4 py-2 text-xs w-[81%]"
                  type="text"
                  placeholder="search for domain"
                />
                <button className="text-xs bg-gradient-to-r from-orange-600 to-red-700 rounded-2xl p-1 px-4 md:absolute right-24">search domain</button>
              </div>
            </div>
            <div className="" >
            {/* <img  src={img2} alt="" /> */}
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Content;
