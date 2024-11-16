"use client";
import Navbar from "@/components/Navbar/Navbar";
import Products from "@/components/DataBlocks/Products";
import Filters from "@/components/Filters/Filters";
import React, { useState } from "react";

export default function Home() {

  const [searchInput, setSearchInput] = useState("");

  return (
    <main>
      <Navbar setSearchInput={setSearchInput} />
      <section className="flex flex-col items-center justify-center">
        <Filters />
        <Products searchInput={searchInput} />
      </section>
    </main>
  );
}