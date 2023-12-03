import React, { useState } from 'react';
import './filtro.css'; // Agrega la importación del archivo de estilos CSS

const data = [
  { nombre: 'Persona 1', edad: 25, genero: 'M' },
  { nombre: 'Persona 2', edad: 30, genero: 'F' },
  { nombre: 'Persona 3', edad: 22, genero: 'M' },
  // Agrega más datos
];

const edadesPreestablecidas = [
  { label: '0-20 años', min: 0, max: 20 },
  { label: '21-40 años', min: 21, max: 40 },
  { label: '41+ años', min: 41, max: Infinity },
];

function Filtro({ onFilter }) {
  const [showEdades, setShowEdades] = useState(false);
  const [showGeneroOptions, setShowGeneroOptions] = useState(false);
  const [showEdadOptions, setShowEdadOptions] = useState(false);
  const [genero, setGenero] = useState('');
  const [minEdad, setMinEdad] = useState('');
  const [maxEdad, setMaxEdad] = useState('');

  const handleFilterChange = () => {
    const filtro = {
      genero,
      minEdad,
      maxEdad,
    };
    onFilter(filtro);
  };

  const toggleGeneroOptions = () => {
    setShowGeneroOptions(!showGeneroOptions);
  };

  const toggleEdadOptions = () => {
    setShowEdadOptions(!showEdadOptions);
  };

  return (
    <div className="filtroContainer">
      <div className="filtroOptions">
        <label className={!showEdades ? 'active' : ''}>
          <input
            type="radio"
            name="filtro"
            value="genero"
            checked={!showEdades}
            onChange={() => setShowEdades(false)}
          />
          Filtrar por Género
        </label>
        <label className={showEdades ? 'active' : ''}>
          <input
            type="radio"
            name="filtro"
            value="edades"
            checked={showEdades}
            onChange={() => setShowEdades(true)}
          />
          Filtrar por Edades
        </label>
      </div>
      {showEdades ? (
        <div className="edadOptions">
          <label className="toggleButton" onClick={toggleEdadOptions}>
            +
          </label>
          {showEdadOptions && (
            <>
              {edadesPreestablecidas.map((edadOption, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="edadOption"
                    value={index}
                    checked={minEdad === edadOption.min && maxEdad === edadOption.max}
                    onChange={() => {
                      setMinEdad(edadOption.min);
                      setMaxEdad(edadOption.max);
                      handleFilterChange(); // Llamar al filtro cuando cambie la selección
                    }}
                  />
                  {edadOption.label}
                </label>
              ))}
            </>
          )}
        </div>
      ) : (
        <div className="generoOptions">
          <label className="toggleButton" onClick={toggleGeneroOptions}>
            +
          </label>
          {showGeneroOptions && (
            <>
              <label>
                <input
                  type="radio"
                  name="genero"
                  value=""
                  checked={genero === ''}
                  onChange={() => {
                    setGenero('');
                    handleFilterChange(); // Llamar al filtro cuando cambie la selección
                  }}
                />
                Todos los géneros
              </label>
              <label>
                <input
                  type="radio"
                  name="genero"
                  value="M"
                  checked={genero === 'M'}
                  onChange={() => {
                    setGenero('M');
                    handleFilterChange(); // Llamar al filtro cuando cambie la selección
                  }}
                />
                Masculino
              </label>
              <label>
                <input
                  type="radio"
                  name="genero"
                  value="F"
                  checked={genero === 'F'}
                  onChange={() => {
                    setGenero('F');
                    handleFilterChange(); // Llamar al filtro cuando cambie la selección
                  }}
                />
                Femenino
              </label>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function Datos() {
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = (filtro) => {
    const filtered = data.filter((item) => {
      const edad = parseInt(item.edad);
      if (
        ((filtro.minEdad === '' && filtro.maxEdad === '') ||
          (edad >= parseInt(filtro.minEdad) && edad <= parseInt(filtro.maxEdad))) &&
        (filtro.genero === '' || item.genero === filtro.genero)
      ) {
        return true;
      }
      return false;
    });

    setFilteredData(filtered);
  };

  return (
    <div className="datosContainer">
      <h3>Filtro de Búsqueda</h3>
      <Filtro onFilter={handleFilter} />
      {filteredData.length > 0 ? (
        <ul>
          {filteredData.map((item, index) => (
            <li key={index}>
              {item.nombre}, Edad: {item.edad}, Género: {item.genero}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay resultados que coincidan con el filtro.</p>
      )}
    </div>
  );
}

export default Datos;
