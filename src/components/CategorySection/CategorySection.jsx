import React from "react";

const categories = [
  {
    id: 1,
    name: "Electricity",
    image: "https://i.ibb.co/4n6sNwKY/electricity.jpg",
  },
  {
    id: 2,
    name: "Gas",
    image: "https://i.ibb.co/HLFTvSmD/gas.jpg",
  },
  {
    id: 3,
    name: "Water",
    image: "https://i.ibb.co/4nFY3B6F/water.jpg",
  },
  {
    id: 4,
    name: "Internet",
    image: "https://i.ibb.co/SDT99Jhw/internet.jpg",
  },
];

const CategorySection = () => {
  return (
    <div className="max-w-6xl mx-auto mt-16 px-5">
      <h2 className="text-4xl font-bold text-center mb-10">Our Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-gradient-to-tr from-white to-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col items-center p-6"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 shadow-inner">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
