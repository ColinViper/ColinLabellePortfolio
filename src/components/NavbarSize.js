import React, { useState, useEffect } from "react";

const NavbarSize = ({ onNavbarHeightChange }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        const height = navbar.offsetHeight;
        setNavbarHeight(height);
        onNavbarHeightChange(height);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onNavbarHeightChange]);

  return null;
};

export default NavbarSize;
