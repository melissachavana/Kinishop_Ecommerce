import React from "react";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col mt-20 px-3 py-3 items-center bg-yellow-200 ">
      {children}
    </div>
  );
};
