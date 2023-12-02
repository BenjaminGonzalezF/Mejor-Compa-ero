import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const   MostrarCandidatos = ({ nombre, apellido, correo }) => {

  const fondo = "my-div bg-gray-100 flex flex-col justify-center items-center h-screen ";
  const formatoLabel = "px-1 text-sm text-gray-600";
  const formatoInput= "text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none";
  
  return (
    <div className={fondo}>
      <form className=" md:p-10 bg-slate-120 shadow-2xl rounded-3xl m-3" >
        <div className="flex justify-center flex-col">
        <p class="text-2xl font-extrabold text-dark-grey-900">{nombre}</p>
            <p><span>{apellido}</span></p>
            <span><label>{correo}</label></span>
            <button
            className="mt-3 text-lg font-semibold
            bg-gray-700 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black" 
            >
            Ingresar
        </button>

        <button
            className="mt-3 text-lg font-semibold
            bg-gray-600 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black" 
            >
            Resumen
        </button>
        </div>
      </form>
    </div>
  );
};

export default MostrarCandidatos;
