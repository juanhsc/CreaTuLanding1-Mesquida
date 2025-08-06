import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg text-center">
     
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">{greeting}</h2>
      <p className="text-gray-600 text-lg">
        ! todos los productos disponibles!
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       
        <div className="bg-gray-100 p-4 rounded-md border border-gray-200">
          <p className="text-gray-500">Novedades</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md border border-gray-200">
          <p className="text-gray-500">Ofertas</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md border border-gray-200">
          <p className="text-gray-500">Producto Premium</p>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
