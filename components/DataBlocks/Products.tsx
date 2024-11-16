"use client";
import React, { useEffect, useState } from "react";
import MealCard from "./MealCard";
import { Button } from "@/components/ui/button";
import Fuse from "fuse.js";

interface Meal {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}

interface DetailedMeal extends Meal {
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
}

interface ApiResponse {
    meals: Meal[] | DetailedMeal[];
}

interface ProductsProps {
    searchInput: string;
    cuisine: string;
}

export default function Products({ searchInput, cuisine }: ProductsProps) {
    const [products, setProducts] = useState<{
        Name: string;
        Area: string;
        Thumbnail: string;
        MealId: string;
        Category: string;
        Rating: string;
        Description: string;
        Discount: number;
        Ingredients: string[];
    }[]>([]);

    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 6;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`);
                const data: ApiResponse = await response.json();
                const meals = data.meals as Meal[];

                const detailedMeals = await Promise.all(
                    meals.map(async (meal) => {
                        const detailsResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
                        const detailsData: ApiResponse = await detailsResponse.json();
                        const detailedMeal = detailsData.meals[0] as DetailedMeal;

                        const discount = Math.floor(Math.random() * 11) * 5 + 10; // Random discount

                        const ingredients = [
                            detailedMeal.strIngredient1,
                            detailedMeal.strIngredient2,
                            detailedMeal.strIngredient3,
                            detailedMeal.strIngredient4,
                        ].filter(Boolean); // Filter out empty ingredients

                        return {
                            Name: detailedMeal.strMeal,
                            Area: detailedMeal.strArea,
                            Thumbnail: detailedMeal.strMealThumb,
                            MealId: detailedMeal.idMeal,
                            Category: detailedMeal.strCategory,
                            Rating: (Math.random() * 3 + 2).toFixed(1),
                            Description: detailedMeal.strInstructions,
                            Discount: discount,
                            Ingredients: ingredients,
                        };
                    })
                );

                setProducts(detailedMeals);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [cuisine]);

    const fuse = new Fuse(products, {
        keys: ['Name'],
        includeScore: true,
        threshold: 0.4,
    });

    const filteredProducts = searchInput
        ? fuse.search(searchInput).map(result => result.item)
        : products;

    const pageCount = Math.ceil(filteredProducts.length / productsPerPage);
    const paginatedProducts = filteredProducts.slice(
        currentPage * productsPerPage,
        (currentPage + 1) * productsPerPage
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className="grid grid-cols-3 gap-4 mx-10 mb-10">
                {paginatedProducts.map((product) => (
                    <MealCard
                        key={product.MealId}
                        Name={product.Name}
                        Area={product.Area}
                        Thumbnail={product.Thumbnail}
                        MealId={parseInt(product.MealId)}
                        Category={product.Category}
                        Rating={parseFloat(product.Rating)}
                        Description={product.Description}
                        Discount={product.Discount}
                        Ingredients={product.Ingredients}
                    />
                ))}
            </div>
            <div className="flex justify-center my-4">
                {Array.from({ length: pageCount }, (_, i) => (
                    <Button
                        key={i}
                        variant={currentPage === i ? "default" : "outline"}
                        className="mx-1"
                        onClick={() => handlePageChange(i)}
                    >
                        {i + 1}
                    </Button>
                ))}
            </div>
        </div>
    );
}