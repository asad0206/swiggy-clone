"use client";

import React, { useState } from "react";

import Navbar from "@/components/Navbar/Navbar";
import Products from "@/components/DataBlocks/Products";
import Filters from "@/components/Filters/Filters";


export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [cuisine, setCuisine] = useState("Indian");

  return (
    <main className="bg-gray-200">
      <Navbar setSearchInput={setSearchInput} />
      <section className="flex flex-col items-center justify-center">
        <Filters onCuisineChange={setCuisine} />
        <Products searchInput={searchInput} cuisine={cuisine} />
      </section>
    </main >
  );
}