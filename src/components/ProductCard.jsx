import { Heart, Plus, Star, StarHalf } from "lucide-react";
import { RiHeartFill } from "react-icons/ri";

const ProductCard = () => {
  return (
    <div className="bg-white min-w-[260px] border border-gray-200 rounded-xl shadow-sm overflow-hidden transition duration-200">
      <div className="p-4">
        <div className="relative text-center">
          <img
            src="https://img.freepik.com/free-vector/lorem-ipsum-line-art-logo-design_779267-1640.jpg"
            alt="Salted Instant Popcorn"
            className="mb-3 w-full h-48 object-contain mx-auto"
          />
          <div className="absolute top-0 right-0 flex flex-col space-y-2">
            <RiHeartFill className="cursor-pointer w-6 h-6 text-gray-300 hover:text-red-600" />
          </div>
        </div>
        <div className="text-xs text-gray-500 mb-1">
          <a href="#!" className="hover:underline">
            Instant Food
          </a>
        </div>
        <h2 className="text-sm font-medium text-gray-900 hover:text-green-600 transition">
          <a href="./pages/shop-single.html" className="line-clamp-2">
            Salted Instant Popcorn
          </a>
        </h2>
        <div className="flex items-center text-yellow-400 text-sm mt-1">
          <span className="flex space-x-1">
            <Star size={14} fill="currentColor" stroke="none" />
            <Star size={14} fill="currentColor" stroke="none" />
            <Star size={14} fill="currentColor" stroke="none" />
            <Star size={14} fill="currentColor" stroke="none" />
            <StarHalf size={14} />
          </span>
          <span className="text-gray-500 text-xs ml-2">4.5 (39)</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm">
            <span className="text-gray-900 font-semibold mr-2">$13</span>
            <span className="text-gray-400 line-through">$18</span>
          </div>
          <button className="flex items-center cursor-pointer bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded hover:bg-green-700 transition">
            <Plus className="w-4 h-4 mr-1" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
