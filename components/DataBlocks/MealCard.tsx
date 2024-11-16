import React from "react"
import Image from "next/image"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Star } from "lucide-react"

interface MealCardProps {
    Name: string;
    Area: string;
    Thumbnail: string;
    MealId: number;
    Category: string;
    Rating: number;
    Description: string;
    Discount: number;
    Ingredients: string[];
}

export default function MealCard({
    Name,
    Area,
    Thumbnail,
    MealId,
    Category,
    Rating,
    Description,
    Discount,
    Ingredients
}: MealCardProps) {

    const truncateDescription = (description: string): string => {
        const words = description.split(' ');
        if (words.length > 100) {
            const truncatedWords = words.slice(0, 100);
            return truncatedWords.join(' ') + '...';
        }
        return description;
    };
    const truncatedDescription = truncateDescription(Description);

    return (
        <Dialog>
            <DialogTrigger>
                <Card className="w-full max-w-sm overflow-hidden bg-card hover:scale-105 transition-transform duration-200 cursor-pointer">
                    <div className="relative">
                        <div className="aspect-[4/3] overflow-hidden">
                            <Image
                                src={`${Thumbnail}`}
                                alt={`${Name}, ${MealId} Thumbnail`}
                                width="0"
                                height="0"
                                sizes="100vw"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-md text-sm">
                            <span>{Discount}% OFF ABOVE ₹500</span>
                        </div>
                    </div>
                    <CardContent className="p-4">
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-lg">{Name}</h3>
                                <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-0.5 rounded text-sm">
                                    <Star className="h-4 w-4 fill-green-800" />
                                    <span>{Rating}</span>
                                </div>
                            </div>
                            <div className="flex flex-row text-sm text-muted-foreground">{Category}</div>
                            <div className="flex flex-row text-sm text-muted-foreground">{Ingredients.join(', ')}</div>
                            <div className="flex flex-row text-sm text-muted-foreground">{Area}</div>
                        </div>
                    </CardContent>
                </Card>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Description</DialogTitle>
                <DialogDescription className="whitespace-pre-wrap">{truncatedDescription}</DialogDescription>
            </DialogContent>
        </Dialog >
    )
}