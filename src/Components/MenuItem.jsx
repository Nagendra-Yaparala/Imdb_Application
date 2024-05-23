import Link from "next/link";
import React from "react";

const MenuItem = ({ title, address, icon }) => {
  return (
    <>
      <Link className="flex items-center hover:text-amber-500" href={address}>
        <span className="text-2xl sm:hidden">{icon}</span>
        <p className="hidden sm:inline uppercase font-semibold">{title}</p>
      </Link>
    </>
  );
};

export default MenuItem;
