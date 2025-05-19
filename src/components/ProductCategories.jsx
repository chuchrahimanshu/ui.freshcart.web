import React, { useRef } from "react";
import { Card } from "../shadcn/card"; // adjust if needed
import { ChevronLeft, ChevronRight } from "lucide-react";
import LayoutStructure from "./LayoutStructure";

const categories = [
  "Baby Care",
  "Chicken, Meat & Fish",
  "Cleaning Essentials",
  "Pet Care",
  "Dairy, Bread & Eggs",
  "Snack & Munchies",
  "Bakery & Biscuits",
  "Instant Food",
  "Tea, Coffee & Drinks",
  "Atta, Rice & Dal",
];

const demoImageUrl =
  "https://img.freepik.com/free-vector/lorem-ipsum-line-art-logo-design_779267-1640.jpg";

export default function ProductCategories() {
  const scrollContainerRef = useRef(null);

  const scrollAmount = 220;

  function scrollLeft() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  }

  function scrollRight() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      <style>
        {`
          /* Hide scrollbar for Chrome, Safari and Opera */
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          /* Hide scrollbar for IE, Edge and Firefox */
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      <LayoutStructure>
        <div className="my-5">
          <div className="mb-6 flex justify-between items-center">
            <h3 className="text-2xl font-semibold">Product Categories</h3>
            <div className="flex space-x-2">
              <button
                aria-label="Previous"
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer"
                onClick={scrollLeft}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                aria-label="Next"
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer"
                onClick={scrollRight}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-x-auto hide-scrollbar"
          >
            {categories.map((category) => (
              <a
                href="../pages/shop-grid.html"
                key={category}
                className="min-w-[220px] block text-center no-underline text-inherit"
              >
                <Card className="p-4 mb-4 border border-[#dee2e0] hover:border-[#0bac0a] hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col items-center py-8">
                    <img
                      src={demoImageUrl}
                      alt={category}
                      className="mb-3 w-32 h-32 object-contain"
                      loading="lazy"
                    />
                    <div className="truncate text-base font-medium">
                      {category}
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </LayoutStructure>
    </>
  );
}
