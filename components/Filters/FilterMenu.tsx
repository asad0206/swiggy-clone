'use client'

import { useState } from "react"

import ShimmerButton from "@/components/ui/shimmer-button";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Radio02 from "@/components/ui/radio02";
import { Settings2 } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

interface FilterMenuProps {
    onCuisineChange: (cuisine: string) => void;
}

export default function FilterMenu({ onCuisineChange }: FilterMenuProps) {
    const [open, setOpen] = useState(false)
    const [activeCategory, setActiveCategory] = useState("sort")
    const [selectedCuisine, setSelectedCuisine] = useState("indian")

    const categories = [
        { id: "cuisines", label: "Cuisines" },
        { id: "sort", label: "Sort" },
        { id: "delivery", label: "Delivery Time" },
        { id: "explore", label: "Explore" },
        { id: "ratings", label: "Ratings" },
        { id: "veg", label: "Veg/Non-Veg" },
        { id: "offers", label: "Offers" },
    ]

    const sortOptions = [
        { value: "relevance", label: "Relevance (Default)" },
        { value: "deliveryTime", label: "Delivery Time" },
        { value: "rating", label: "Rating" },
        { value: "low2high", label: "Low to High" },
        { value: "high2low", label: "High to Low" },
    ]

    const cuisineOptions = [
        { value: "indian", label: "Indian" },
        { value: "american", label: "American" },
        { value: "british", label: "British" },
        { value: "canadian", label: "Canadian" },
        { value: "chinese", label: "Chinese" },
        { value: "croatian", label: "Croatian" },
        { value: "dutch", label: "Dutch" },
        { value: "egyptian", label: "Egyptian" },
        { value: "filipino", label: "Filipino" },
        { value: "french", label: "French" },
        { value: "greek", label: "Greek" },
        { value: "irish", label: "Irish" },
        { value: "italian", label: "Italian" },
        { value: "jamaican", label: "Jamaican" },
        { value: "japanese", label: "Japanese" },
        { value: "kenyan", label: "Kenyan" },
        { value: "malaysian", label: "Malaysian" },
        { value: "mexican", label: "Mexican" },
        { value: "moroccan", label: "Moroccan" },
        { value: "polish", label: "Polish" },
        { value: "portuguese", label: "Portuguese" },
        { value: "russian", label: "Russian" },
        { value: "spanish", label: "Spanish" },
        { value: "thai", label: "Thai" },
        { value: "tunisian", label: "Tunisian" },
        { value: "turkish", label: "Turkish" },
        { value: "ukrainian", label: "Ukrainian" },
        { value: "vietnamese", label: "Vietnamese" }
    ];

    const ratingOption = [
        { value: "rate4", label: "Rating 4+" },
        { value: "rate3", label: "Rating 3+" },
    ]

    const foodCategory = [
        { value: "pureVeg", label: "Pure Veg" },
        { value: "nonVeg", label: "Non Veg" },
    ]

    const offerOption = [
        { value: "offers", label: "Offers" },
    ]

    const handleCuisineChange = (value: string) => {
        setSelectedCuisine(value);
        onCuisineChange(value);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <ShimmerButton className="rounded-full gap-3"><div>Filter</div> <Settings2 /></ShimmerButton>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] p-0">
                <DialogHeader className="p-4 pb-0">
                    <div className="flex items-center justify-between">
                        <DialogTitle>Filter</DialogTitle>
                    </div>
                </DialogHeader>
                <div className="grid grid-cols-[200px_1fr] h-[300px]">
                    <ScrollArea className="border-r">
                        {categories.map((category) => (
                            <Button
                                key={category.id}
                                variant="ghost"
                                className={`w-full justify-start rounded-none px-4 py-6 text-left text-lg font-bold ${activeCategory === category.id
                                    ? "bg-muted"
                                    : ""
                                    }`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.label}
                            </Button>
                        ))}
                    </ScrollArea>
                    <ScrollArea className="p-4">
                        {activeCategory === "sort" && (
                            <div className="space-y-4">
                                <h3 className="font-medium text-sm">SORT BY</h3>
                                <Radio02 options={sortOptions} defaultValue="relevance" onChange={() => { }} />
                            </div>
                        )}
                        {activeCategory === "delivery" && (
                            <div className="space-y-4">
                                <h3 className="font-medium text-sm">FILTE RBY</h3>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="fastDelivery" />
                                    <label
                                        htmlFor="fastDelivery"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Fast Delivery
                                    </label>
                                </div>
                            </div>
                        )}
                        {activeCategory === "cuisines" && (
                            <div className="space-y-4">
                                <h3 className="font-medium text-sm">FILTER BY CUISINE</h3>
                                <Radio02 options={cuisineOptions} defaultValue={selectedCuisine} onChange={handleCuisineChange} />
                            </div>
                        )}
                        {activeCategory === "explore" && (
                            <div className="space-y-4">
                                <h3 className="font-medium text-sm">FILTER BY</h3>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="newOnSwiggy" />
                                    <label
                                        htmlFor="newOnSwiggy"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        New On Swiggy
                                    </label>
                                </div>
                            </div>
                        )}
                        {activeCategory === "ratings" && (
                            <div className="space-y-4">
                                <h3 className="font-medium text-sm">FILTER BY</h3>
                                <Radio02 options={ratingOption} defaultValue="" onChange={() => { }} />
                            </div>
                        )}
                        {activeCategory === "veg" && (
                            <div className="space-y-4">
                                <h3 className="font-medium text-sm">FILTER BY</h3>
                                <Radio02 options={foodCategory} defaultValue="" onChange={() => { }} />
                            </div>
                        )}
                        {activeCategory === "offers" && (
                            <div className="space-y-4">
                                <h3 className="font-medium text-sm">FILTER BY</h3>
                                <Radio02 options={offerOption} defaultValue="" onChange={() => { }} />
                            </div>
                        )}
                    </ScrollArea>
                </div>
            </DialogContent>
        </Dialog>
    )
}