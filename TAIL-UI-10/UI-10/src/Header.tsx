import React from "react";
import img1 from "../src/assets/img/mountain.png";
import img2 from "../src/assets/img/ramees3.jpeg";
import img3 from "../src/assets/img/snow4.jpg";
import icon1 from "./assets/img/map.png";
import m1 from '../src/assets/img/m1.webp'
import m2 from '../src/assets/img/img7.jpg'
import m3 from '../src/assets/img/img6.jpg'
import m4 from '../src/assets/img/m5.jpg'
import rock from '../src/assets/img/rock.jpeg'
import icon2 from '../src/assets/img/book-mark.png'

function Header() {
  return (
    <div className="font-allerta">
      <div className=" bg-fixed bg-cover pb-52" style={{ backgroundImage: `url(${img3})` }}>
        <div className=" container relative mx-auto py-6 px-4">
          <div className=" flex justify-between items-center">
          <div className="border-2 border-black rounded-full p-1 ">
                  <img src={img1} alt="" />
                </div>
            <nav>
              <ul className="flex sm:space-x-10 items-center sm:flex-row flex-col">
               
                <a href="">MEN</a>
                <a href="">WOMEN</a>
                <a href="">EQUIPMENT</a>
                <a href="">IMPACT</a>
              </ul>
            </nav>
            <div className="bg-white h-10 w-10 rounded-full overflow-hidden">
              <img className="h-10 w-10 " src={img2} alt="" />
            </div>
          </div>
          <div>
            <div className="mt-40 space-y-5 text-centercen flex flex-col items-center justify-center">
              <h1 className="text-4xl text-center sm:text-7xl  font-bungee animate-bounce ">
                Mountain View
              </h1>
              <p className="text-sm max-w-[60%] text-slate-700 text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Praesentium aliquam accusamus cumque odit ad inventore
                provident, quo ab adipisci, maxime illum quam enim temporibus
                nisi. Debitis doloribus dolor odio numquam!
              </p>
              <a className="text-white flex gap-2 bg-cyan-900  p-2 rounded" href="">
                <img src={icon1} alt="" /> Reggisbergge, Switzerland
              </a>
              
            </div>
            <div className="space-x-3 mt-24 flex items-center justify-center">
                <button className=" bg-gray-800 px-4 py-1 rounded text-sky-200 hover:bg-gray-700 hover:text-white">View More</button>
                <button className=" bg-gray-800 px-4 py-1 rounded text-sky-200 hover:bg-gray-700 hover:text-white">Book Now</button>
              </div>
          </div>
        </div>
      </div>
      <div  className=""style={{ backgroundImage: `url(${rock})` }} >
        <div className=" container relative mx-auto py-10 px-10" >
          <h1 className="text-3xl font-medium  text-white mb-8 text-center">Trending</h1>

          <div className="grid gap-9 grid-rows-1 grid-cols-1 sm:grid-cols-4 ">
            <div
              className="h-80 rounded flex flex-col justify-between p-5 bg-cover"
              style={{ backgroundImage: `url(${m1})` }}
            >
              <div className="flex justify-between">
                <h1 className="text-xl font-semibold">Ramees</h1>
                <a href=""><img className="hover:bg-slate-800 rounded-lg" src={icon2} alt="" /></a>
              </div>
              <div className="text-white">
                <p className="text-lg font-medium">Italy</p>
                <p className="text-xl ">Ahrn Nature Park</p>
              </div>
            </div>
            <div
              className="h-80 rounded flex flex-col justify-between p-5 "
              style={{ backgroundImage: `url(${m2})` }}
            >
              <div className="flex justify-between">
                <h1 className="text-xl font-semibold">Lional Messi</h1>
                <a href=""><img className="hover:bg-slate-800 rounded-lg" src={icon2} alt="" /></a>
              </div>
              <div className="text-white">
                <p className="text-lg font-medium">Argentina</p>
                <p className="text-xl ">shawai Nature Park</p>
              </div>
            </div>
            <div
              className="h-80 rounded flex flex-col justify-between p-5 "
              style={{ backgroundImage: `url(${m3})` }}
            >
             <div className="flex justify-between">
               <h1 className="text-xl font-semibold">Cristiano Rono</h1>
               <a href=""><img className="hover:bg-slate-800 rounded-lg" src={icon2} alt="" /></a>
             </div>
              <div className="text-white">
                <p className="text-lg font-medium">Portugal</p>
                <p className="text-xl ">Sinai Mount</p>
              </div>
            </div>
            <div
              className="h-80 rounded flex flex-col justify-between p-5 bg-cover"
              style={{ backgroundImage: `url(${m4})` }}
            >
             <div className="flex justify-between">
               <h1 className="text-xl font-semibold">Neymar jr</h1>
               <a href=""><img className="hover:bg-slate-800 rounded-lg" src={icon2} alt="" /></a>
             </div>
              <div className="text-white">
                <p className="text-lg font-medium">Brazil</p>
                <p className="text-xl ">Mount Rabeka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default Header;
