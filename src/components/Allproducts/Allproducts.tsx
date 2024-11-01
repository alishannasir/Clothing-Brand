/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import { AllProducts } from "@/lib/db";
import Image from "next/image";
import { CardPagination } from "@/components/Pagination/Pagination";
import { Dropdown } from "./Dropdown/Dropdown";
import { DropdownSingle } from "./SingleDrop/Singledrop";
import Link from "next/link";

export default function AllProductsComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16; 

  const totalPages = Math.ceil(AllProducts.length / itemsPerPage);
  const totalProducts = AllProducts.length;
  const currentProducts = AllProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-4xl font-bold pt-3 pb-3 font-serif">All Products</h1>
      <div className="flex flex-row justify-around items-center w-full">
            <span className=" flex text-gray-500 font-serif">
              {totalProducts} Products
            </span>
            <div className="flex z-10">
            <DropdownSingle />   
            </div>
          </div>
      <div className="flex flex-row items-center justify-center w-full h-full p-3">
         <div className="w-80 p-5">
            <h1 className="text-lg font-bold">Filter</h1>
            <hr className="w-full bg-black my-5"  />
            <Dropdown />
         </div>      
        <div className="grid grid-cols-4 w-full h-full border border-gray-800">      
          {currentProducts.map((product) => {
            const [onHover, setOnHover] = useState(false);
            return (
            <div className="w-full h-full border flex flex-col border-gray-800" key={product.id}>
              <Link href={`#`}>
                    <Image  
                        src={onHover ? product.hoverUrl || product.url : product.url}
                        alt={product.title}
                        width={380}
                        height={380}
                        className="w-full h-full object-cover cursor-pointer "     
                        onMouseEnter={() => setOnHover(true)}
                        onMouseLeave={() => setOnHover(false)}                
                      />
              </Link>
                <div className="flex flex-col items-center justify-center p-2">
                    <h1 className="text-lg font-bold">{product.title}</h1>
                    <h1 className="text-sm text-gray-500">{product.price}</h1>
                </div>
            </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Component */}
      <CardPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
