import Image from "next/image";
import React from "react";
import bgImg from "/public/assets/bg-img.jpeg";
import trustedBrands from "/public/assets/customers-logo-strip.png";
import Services from "./Services";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { TiCloudStorage } from "react-icons/ti";
import Link from "next/link";


const Landing = () => {
  const handleClick = (e:any) => {
    e.preventDefault();
  }
  return (
    <>
      <div className="flex items-center justify-center flex-col relative">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center">
          <div className="flex flex-col items-center justify-center ">
            <div className="flex flex-col items-center">
              <h1 className="text-slate-600 text-4xl md:max-w-[80%] text-center md:text-6xl font-semibold mb-2">
                Get the Perfect Wokout Session with{" "}
                <span className="text-specialColor font-extrabold">
                  MyFitBud
                </span>
              </h1>
              <p className="text-lg max-w-[75%] text-center">
                MyFitBud is a platform that allows you to search and storage
                workouts.
              </p>
            </div>
            <div className="flex flex-col md:flex-row my-12 gap-6 items-center justify-center w-full h-[100%]">
              <Services
                title="Account"
                text="Access your workouts. from anywhere."
                icon={<BiUser size={35} />}
              />
              <Services
                title="Search"
                text="Search for any specific workouts based on muscles or exercises."
                icon={<BsSearch size={35} />}
              />
              <Services
                title="Storage"
                text="Storage your workouts for easier access."
                icon={<TiCloudStorage size={35} />}
              />
            </div>
          </div>
          <div className="shadow-lg shadow-specialColor hover:cursor-pointer rounded-md mx-12 md:mx-0">
            <Image
              src={bgImg}
              width={600}
              height={600}
              alt="bgImg"
              className="w-auto h-auto rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-12 opacity-50">
          <h2 className="text-slate-500 text-xl uppercase">
            truested by our partners
          </h2>
          <Image
            src={trustedBrands}
            width={600}
            height={100}
            alt="trustedBrands"
          />
        </div>
        <div className="my-12  hover:scale-105 active:scale-95 ">
          <Link className="py-4 px-8 rounded-md bg-specialColor" href={'/workouts'} >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
