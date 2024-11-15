import Products from "@/components/DataBlocks/Products";
import Filters from "@/components/Filters/Filters";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Filters />
      <Products />
    </main>
  );
}
