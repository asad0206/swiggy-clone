import Search from "@/components/search";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
    return (
        <div className="max-w-screen flex flex-row mx-10 my-8 p-5 bg-white shadow-lg drop-shadow-lg rounded-md hover:shadow-orange-200">
            <div className="w-1/2 h-full justify-start rounded-lg">
                <Link href={"/"}>
                    <Image src="/swiggy-logo.webp" alt="Swiggy Logo" width={150} height={100} />
                </Link>
            </div>
            <div className="w-1/2 h-full flex justify-end">
                <Search />
            </div>
        </div>
    );

}