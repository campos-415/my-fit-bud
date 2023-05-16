import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className=" mt-2  flex items-center justify-between max-w-[1240px] m-auto">
        <div>
          <h1 className="text-4xl font-extrabold text-specialColor hover:cursor-pointer">
          MyFitBud
        </h1>
        </div>
        
        <ul className="flex items-center gap-3 text-lg font-semibold mx-2">
          <Link href="/">
            <li className="hover:text-specialColor">Home</li>
          </Link>{" "}
          <Link href="/workouts">
            <li className="hover:text-specialColor">Workouts</li>
          </Link>
          {/* <Link href="/logiin">
            <li className="hover:text-specialColor">Login</li>
          </Link> */}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
