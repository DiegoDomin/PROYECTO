import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';


const Map = () => {
  const [map, setMap] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);
  const [genderFilter, setGenderFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState({ min: 0, max: Infinity });
  const [edadesPreestablecidas] = useState([
    { label: '0-20 años', min: 0, max: 20 },
    { label: '21-40 años', min: 21, max: 40 },
    { label: '41+ años', min: 41, max: Infinity },
  ]);
  const [showEdadOptions, setShowEdadOptions] = useState(false);
  const [showGeneroOptions, setShowGeneroOptions] = useState(false);

  useEffect(() => {
    const newMap = L.map('map').setView([13.6673, -88.9783], 8.25);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(newMap);

    newMap.on('click', onMapClick);

    setMap(newMap);

    return () => {
      newMap.remove();
    };
  }, []);

  function onMapClick(e) {
    const clickedCoordinates = [e.latlng.lat, e.latlng.lng];
    setSearchResults([{ display_name: 'Ubicación seleccionada', lat: e.latlng.lat, lon: e.latlng.lng }]);
    setAutocompleteOptions([]);
    map.flyTo(clickedCoordinates, 14);
  }

  const handleSearchInputChange = async (e) => {
    const input = e.target.value;
    setSearchInput(input);

    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          format: 'json',
          q: input,
          limit: 5,
          viewbox: '-180,-90,180,90',
        },
      });

      setAutocompleteOptions(response.data);
    } catch (error) {
      console.error('Error en la búsqueda de autocompletado:', error);
    }
  };

  const handleOptionClick = (option) => {
    setSearchInput(option.display_name);
    setSearchResults([option]);
    setAutocompleteOptions([]);
    map.flyTo([parseFloat(option.lat), parseFloat(option.lon)], 14);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          format: 'json',
          q: searchInput,
          limit: 1,
          viewbox: '-180,-90,180,90',
        },
      });

      setSearchResults(response.data);

      if (response.data.length > 0) {
        const resultCoordinates = [parseFloat(response.data[0].lat), parseFloat(response.data[0].lon)];
        map.flyTo(resultCoordinates, 14);
      } else {
        alert('Lugar no encontrado. Por favor, inténtelo de nuevo.');
      }
    } catch (error) {
      console.error('Error en la búsqueda:', error);
      alert('Error en la búsqueda. Por favor, inténtelo de nuevo.');
    }
  };

  const handleGenderFilterChange = (e) => {
    setGenderFilter(e.target.value);
  };

  const handleAgeFilterChange = (min, max) => {
    setAgeFilter({ min, max });
  };

  const handleToggleEdadOptions = () => {
    setShowEdadOptions(!showEdadOptions);
  };

  const handleToggleGeneroOptions = () => {
    setShowGeneroOptions(!showGeneroOptions);
  };

  const handleFilterSubmit = () => {
    // Datos de ejemplo: lista de personas con información de género y edad
    const personas = [
      { nombre: 'Persona 1', genero: 'male', edad: 25, lat: 13.6673, lon: -88.9783 },
      { nombre: 'Persona 2', genero: 'female', edad: 30, lat: 13.7000, lon: -88.9500 },
      // Agrega más personas según sea necesario
    ];

    // Aplicar filtros
    const personasFiltradas = personas.filter((persona) => {
      // Aplicar filtro de género
      if (genderFilter && persona.genero !== genderFilter) {
        return false;
      }

      // Aplicar filtro de edad
      if (
        ageFilter.min !== undefined &&
        ageFilter.max !== undefined &&
        (persona.edad < ageFilter.min || persona.edad > ageFilter.max)
      ) {
        return false;
      }

      return true;
    });

    // Limpiar marcadores existentes en el mapa
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    // Agregar marcadores para las personas filtradas
    personasFiltradas.forEach((persona) => {
      const marker = L.marker([persona.lat, persona.lon]).addTo(map);

      // Contenido del pop-up con información de edad y género
      const popupContent = `
        <strong>${persona.nombre}</strong><br>
        Género: ${persona.genero}<br>
        Edad: ${persona.edad}
      `;

      marker.bindPopup(popupContent);
    });

    // Centrar el mapa en la primera persona filtrada (si existe)
    if (personasFiltradas.length > 0) {
      const resultCoordinates = [personasFiltradas[0].lat, personasFiltradas[0].lon];
      map.flyTo(resultCoordinates, 14);
    } else {
      alert('No hay personas que coincidan con los filtros.');
    }
  };

  return (
    <div className='map-container'>
      <div id='filter-form'>
        <label>
          Género:
          <div className='genero-options'>
            <label className='toggleButton' onClick={handleToggleGeneroOptions}>
              +
            </label>
            {showGeneroOptions && (
              <>
                <label>
                  <input
                    type='radio'
                    name='genero'
                    value=''
                    checked={genderFilter === ''}
                    onChange={() => {
                      setGenderFilter('');
                      handleFilterSubmit();
                    }}
                  />
                  Todos los géneros
                </label>
                <label>
                  <input
                    type='radio'
                    name='genero'
                    value='male'
                    checked={genderFilter === 'male'}
                    onChange={() => {
                      setGenderFilter('male');
                      handleFilterSubmit();
                    }}
                  />
                  Masculino
                </label>
                <label>
                  <input
                    type='radio'
                    name='genero'
                    value='female'
                    checked={genderFilter === 'female'}
                    onChange={() => {
                      setGenderFilter('female');
                      handleFilterSubmit();
                    }}
                  />
                  Femenino
                </label>
              </>
            )}
          </div>
        </label>
        <label>
          Edad:
          <div className='edad-options'>
            <label className='toggleButton' onClick={handleToggleEdadOptions}>
              +
            </label>
            {showEdadOptions && (
              <>
                {edadesPreestablecidas.map((edadOption, index) => (
                  <label key={index}>
                    <input
                      type='radio'
                      name='edadOption'
                      checked={
                        ageFilter.min === edadOption.min && ageFilter.max === edadOption.max
                      }
                      onChange={() => handleAgeFilterChange(edadOption.min, edadOption.max)}
                    />
                    {edadOption.label}
                  </label>
                ))}
              </>
            )}
          </div>
        </label>
        <button type='button' onClick={handleFilterSubmit}>
          Aplicar Filtros
        </button>

      </div>
      <div className='container-mapa'>
        <form onSubmit={handleSearchSubmit} className='form-mapa'>
          <input
            type='text'
            placeholder='Buscar una ubicación'
            value={searchInput}
            onChange={handleSearchInputChange}
          />

            <diSv id='autocomplete-options'>
          {autocompleteOptions.map((option) => (
            <div key={option.place_id} onClick={() => handleOptionClick(option)}>
              {option.display_name}
            </div>
          ))}
        </diSv>
        </form>

      

        <div id='search-results'>
          <h3>Resultados de la búsqueda:</h3>
          <ul>
            {searchResults.map((result) => (
              <li key={result.lat + result.lon}>{result.display_name}</li>
            ))}
          </ul>
        </div>
        <div id='map' style={{ height: '400px',width:'740px' }}></div>
      </div>
    </div>
  );
};

export default Map;
 