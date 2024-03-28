import React from "react";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className="nav-bar h-20 flex flex-col justify-center shadow-md">
      <div className="flex text-4xl justify-start space-x-4 text-white ml-4">
        <h1>sky</h1>
        <h1>sports</h1>
      </div>
    </div>
  );
};

export default Nav;
