import React from "react";

const ProductListingSidebar = ({ products }) => {
  return (
    <aside className="flex w-16 md:w-28 sticky top-0 flex-shrink-0 shadow-lg h-[calc(100vh-100px)] md:h-screen overflow-y-auto bg-white p-1 md:p-3 rounded-lg flex-col gap-2 scrollbar-hide">
      <h2 className="text-[10px] md:text-sm font-semibold text-gray-700 mb-1 md:mb-3 text-center">
        Products
      </h2>
      <div className="flex flex-col gap-1 md:gap-3">
        {products.slice(0, 10).map((prod) => (
          <div
            key={prod.id}
            className="flex flex-col items-center text-center rounded p-1 md:p-2 bg-white hover:shadow-sm transition cursor-pointer"
          >
            <div className="w-10 h-10 md:w-15 md:h-15 mb-1 rounded overflow-hidden">
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-[8px] md:text-[10px] text-gray-700 w-full break-words leading-tight">
              {prod.name}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ProductListingSidebar;
