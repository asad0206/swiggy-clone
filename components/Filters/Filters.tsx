"use client";
import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import ShimmerButton from "@/components/ui/shimmer-button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Radio02 from "@/components/ui/radio02";
import FilterMenu from "@/components/Filters/FilterMenu";

interface FiltersProps {
    onCuisineChange: (cuisine: string) => void;
}

export default function Filters({ onCuisineChange }: FiltersProps) {
    const [selectedButtons, setSelectedButtons] = useState<{ [key: string]: boolean }>({});

    const toggleButton = (value: string) => {
        setSelectedButtons((prevState) => ({
            ...prevState,
            [value]: !prevState[value],
        }));
    };

    const options = [
        { value: "relevance", label: "Relevance" },
        { value: "deliveryTime", label: "Delivery Time" },
        { value: "rating", label: "Rating" },
        { value: "low2high", label: "Low to High" },
        { value: "high2low", label: "High to Low" },
    ];

    const buttons = [
        { label: "Fast Delivery", value: "fastDelivery" },
        { label: "New on Swiggy", value: "newOnSwiggy" },
        { label: "Ratings 4.0+", value: "ratings40Plus" },
        { label: "Pure Veg", value: "pureVeg" },
        { label: "Offers", value: "offers" },
        { label: "Rs.300-Rs.600", value: "rs300Rs600" },
        { label: "Less than Rs.300", value: "lessThanRs300" },
    ];

    return (
        <section>
            <div className="flex flex-row gap-3 m-5 text-xs">
                <FilterMenu onCuisineChange={onCuisineChange} />
                <Popover>
                    <PopoverTrigger asChild>
                        <ShimmerButton className="rounded-full gap-3"><div>Sort by</div> <ChevronDown /></ShimmerButton>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="flex items-center justify-center">
                            <Radio02 options={options} defaultValue="relevance" onChange={() => { }} />
                        </div>
                    </PopoverContent>
                </Popover>
                {/* <ShimmerButton className="rounded-full gap-3">Fast Delivery</ShimmerButton>
                <ShimmerButton className="rounded-full gap-3">New on Swiggy</ShimmerButton>
                <ShimmerButton className="rounded-full gap-3">Ratings 4.0+</ShimmerButton>
                <ShimmerButton className="rounded-full gap-3">Pure Veg</ShimmerButton>
                <ShimmerButton className="rounded-full gap-3">Offers</ShimmerButton>
                <ShimmerButton className="rounded-full gap-3">Rs.300-Rs.600</ShimmerButton>
                <ShimmerButton className="rounded-full gap-3">Less than Rs.300</ShimmerButton> */}
                {buttons.map((button) => (
                    <ShimmerButton
                        key={button.value}
                        className="rounded-full gap-3"
                        onClick={() => toggleButton(button.value)}
                    >
                        {button.label}
                        {selectedButtons[button.value] && <X aria-hidden="true" />}
                    </ShimmerButton>
                ))}
            </div>
        </section >
    )
}
