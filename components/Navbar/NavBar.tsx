import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className=" mt-2  flex items-center justify-between max-w-[1240px] m-auto">
        <div>
          <h1 className="text-4xl font-extrabold hover:text-specialColor hover:cursor-pointer">
          MyFitBud
        </h1>
        </div>
        
        <ul className="hidden sm:flex items-center gap-3 text-lg font-semibold">
          <Link href="/">
            <li className="hover:text-specialColor">Home</li>
          </Link>{" "}
          <Link href="/#about">
            <li className="hover:text-specialColor">About</li>
          </Link>
          <Link href="/#contact">
            <li className="hover:text-specialColor">Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
