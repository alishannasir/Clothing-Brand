"use client"

import React, { useState } from "react";
import Icons from "./Icon/Icons";
import { SearchSidebar } from "./Search/Search";
import { NavbarText } from "./Navbar/Navbar";
import { Cart } from "./Cart/Cart";

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenDrawer = () => setIsDrawerOpen(true);
  const handleCloseDrawer = () => setIsDrawerOpen(false);

  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  return (
    <>
      <div className="flex flex-row justify-around items-center w-full  h-20 bg-transparent backdrop-blur-md transition-colors duration-300  text-black scrolled:bg-white scrolled:text-white">
        <NavbarText />
          <h1 className="font-bold text-2xl font-serif">Muse Market</h1>
        <Icons onSearchClick={handleOpenDrawer} onCartClick={handleOpenCart} />
      </div>

      <SearchSidebar isOpen={isDrawerOpen} onClose={handleCloseDrawer} />
      <Cart isOpen={isCartOpen} onClose={handleCloseCart} />
    </>
  );
}
