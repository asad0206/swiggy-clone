import Search from "@/components/ui/search";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
    setSearchInput: (value: string) => void;
}

export default function Navbar({ setSearchInput }: NavbarProps) {
    return (
        <nav className="max-w-screen flex flex-row mx-10 p-5 bg-white shadow-lg drop-shadow-lg rounded-md hover:shadow-orange-200 sticky top-0 z-10">
            <div className="w-1/2 h-full justify-start rounded-lg">
                <Link href={"/"}>
                    <Image src="/swiggy-logo.webp" alt="Swiggy Logo" width={150} height={100} />
                </Link>
            </div>
            <div className="w-1/2 h-full flex justify-end">
                <Search setSearchInput={setSearchInput} />
            </div>
        </nav>
    );
}