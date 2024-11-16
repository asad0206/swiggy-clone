import Image from "next/image"
import { Copyright } from "lucide-react"

export default function Footer() {
    return (
        <section className="p-10 bg-black">
            <div className="py-3">
                <Image src="/swiggy-logo.webp" alt="Swiggy Logo" width={150} height={100} />
            </div>
            <div className="flex gap-3 text-white">
                <Copyright /> 2023 Bundl Technologies Pvt. Ltd
            </div>
        </section>
    )
}