import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MostrarCandidatos from './components/MostrarCandidatos'


function VotacionAlumno() {
  const [cards, setCards] = useState([]);

  const candidatos = [
    { nombre: 'Candidato 1', apellido: 'Apellido 1', correo: 'correo1@example.com' },
    { nombre: 'Candidato 2', apellido: 'Apellido 2', correo: 'correo2@example.com' },
    { nombre: 'Candidato 3', apellido: 'Apellido 3', correo: 'correo3@example.com' },
  ];

  return (
    <div className="App">
      <div className="flex  justify-center p-10">
        <h1 className="text-2xl font-semibold ">Votación Alumno:</h1>
      </div>
      <section className="flex justify-center">
        <div className='flex'>
        {candidatos.map((candidato, index) => (
          <MostrarCandidatos
            key={index}
            nombre={candidato.nombre}
            apellido={candidato.apellido}
            correo={candidato.correo}
          />
        ))}
        </div>
      </section>
      </div>
  );
}

export default VotacionAlumno;

