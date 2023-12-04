import Label from "../../label/Label";
import { Validation } from "../../../assets/Validation/validaciones/Validation";
import { useLocalStorage } from "../../../assets/Validation/validaciones/useLocalStorage"; // Ajusta la ruta según tu estructura de archivos
import { useEffect,useState } from "react";
import MapForm from "../../mapForm/mapForm";
function Ultimo_lugar() {
  const initialForm = {
    lat: "",
    lon:""
  };

  const [storedForm] = useLocalStorage("UltimoReportar", initialForm);
  const { form, handleChange} = Validation(
    storedForm,
    "UltimoReportar"
  );
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);
 
  //se guarda las coordenadas

  useEffect(() => {
    if (selectedCoordinates) {
      // Verifica si las coordenadas han cambiado antes de actualizar el estado para evitar un bucle infinito
      if (form.lat !== selectedCoordinates.lat) {
        handleChange({ target: { name: 'lat', value: selectedCoordinates.lat } });
      }
      if (form.lon !== selectedCoordinates.lng) {
        handleChange({ target: { name: 'lon', value: selectedCoordinates.lng } });
      }
    }
  }, [selectedCoordinates, form.lat, form.lon]);
  return (
    <div className="input-form-vestimenta">
      <h2 className="text-title-form-inputs">Ultimo lugar donde fue visto</h2>
      <Label text_label={"Haz click en el mapa donde fue la ultimo lugar donde fue visto"} htmlFor={"lugar"} />
      <input value={form.lat} name='lat' placeholder={selectedCoordinates ? `${selectedCoordinates.lat}` : 'No seleccionadas'} disabled />
<input value={form.lon} name='lon' placeholder={selectedCoordinates ? `${selectedCoordinates.lng}` : 'No seleccionadas'} disabled />

      <MapForm onCoordinatesChange={setSelectedCoordinates} />
    </div>
  );
}

export default Ultimo_lugar

