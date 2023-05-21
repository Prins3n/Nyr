import React from 'react';

export const OppskriftsKort = ({image, name, onClick}) => (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" onClick={onClick}>
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image} alt={name} />
        <div className="p-6">
          <h2 className="title-font text-lg font-medium text-[#ebebe9] mb-3">{name}</h2>
          <div className="flex items-center flex-wrap ">
          </div>
        </div>
      </div>
    </div>
  );
  