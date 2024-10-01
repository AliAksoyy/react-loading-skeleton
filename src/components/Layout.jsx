import React from "react";
import { Outlet } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

const Layout = () => {
  return (
    <div>
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <Outlet />
      </SkeletonTheme>
    </div>
  );
};

export default Layout;
