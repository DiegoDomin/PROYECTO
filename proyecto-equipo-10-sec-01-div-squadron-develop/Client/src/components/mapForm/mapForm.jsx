import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const MapForm = ({ onCoordinatesChange }) => {
  const [map, setMap] = useState(null);
  let markerRef = null;
  const [searchInput, setSearchInput] = useState('');
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);

  useEffect(() => {
    const storedCoordinates = JSON.parse(localStorage.getItem('mapCoordinates')) || { lat: 13.6673, lng: -88.9783 };

    const newMap = L.map('mapForm').setView([storedCoordinates.lat, storedCoordinates.lng], 8.25);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(newMap);

    setMap(newMap);

    function mark(e) {
      if (markerRef) {
        newMap.removeLayer(markerRef);
      }

      const dragLat = e.latlng.lat;
      const dragLon = e.latlng.lng;

      markerRef = L.marker([dragLat, dragLon]).addTo(newMap);

      // Guarda las coordenadas en el almacenamiento local
      localStorage.setItem('mapCoordinates', JSON.stringify({ lat: dragLat, lng: dragLon }));

      // Llama a la función onCoordinatesChange para actualizar las coordenadas en Ultimo_lugar
      onCoordinatesChange({ lat: dragLat, lng: dragLon });
    }

    newMap.on('click', mark);

    // Elimina el marcador al iniciar
    if (storedCoordinates.lat !== 13.6673 || storedCoordinates.lng !== -88.9783) {
      markerRef = L.marker([storedCoordinates.lat, storedCoordinates.lng]).addTo(newMap);
    }

    return () => {
      newMap.off('click', mark);
      newMap.remove();
    };
  }, [onCoordinatesChange]);

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
    const clickedCoordinates = [parseFloat(option.lat), parseFloat(option.lon)];
    onCoordinatesChange({ lat: clickedCoordinates[0], lng: clickedCoordinates[1] });

    setAutocompleteOptions([]);
    map.flyTo(clickedCoordinates, 14);
  };

  return (
    <div>
      <div id="mapForm" style={{ height: '400px', width: '400px' }}></div>
      <form>
        <input
          type='text'
          placeholder='Buscar una ubicación'
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <div id='autocomplete-options'>
          {autocompleteOptions.map((option) => (
            <div key={option.place_id} onClick={() => handleOptionClick(option)}>
              {option.display_name}
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default MapForm;
