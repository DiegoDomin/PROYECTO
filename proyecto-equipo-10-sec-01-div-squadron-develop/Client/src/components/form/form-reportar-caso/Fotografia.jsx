import Label from "../../label/Label";
import { Validation } from "../../../assets/Validation/validaciones/Validation";
import { useLocalStorage } from "../../../assets/Validation/validaciones/useLocalStorage";
import { useState } from "react";
import { useEffect } from "react";
function Fotografia_usuario_registrado() {
  const initialForm = {
    condicion: "",
    img: "",
  };

  const [pathImage, setPathImage] = useState("../../../assets/icons/upload-image-icon.png");
  const [file, setFile] = useState();


  const [storedForm] = useLocalStorage(
    "FotografiaReportar",
    initialForm
  );

  useEffect(() => {
    // Check if there is a stored image URL in local storage
    if (storedForm.img) {
      setPathImage(storedForm.img);
    }
  }, []);

  const onFileChnage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file =e.target.files[0]
      
      if(file.type.includes("image")){
        
        const reader =new FileReader()
        reader.readAsDataURL(file)

        reader.onload=function load(){
          setPathImage(reader.result)
          handleChange({ target: { name: "img", value: reader.result } });
          const updatedForm = { ...storedForm, img: reader.result };
          localStorage.setItem("FotografiaReportar", JSON.stringify(updatedForm));
        }
        setFile(file)
      }else{
        console.log("existe error")
      }
  }
}
const handleButtonClick = () => {
  document.querySelector('.input-update').click();
};
  // Uso del componente Validation con el hook useLocalStorage
  const { form, errors, handleBlur,handleChange } = Validation(
    storedForm,
    "FotografiaReportar"
  );

  return (
    <div className="input-form-fotografia">
      <h2 className="text-title-form-inputs">Subida de fotografia</h2>

      <div className="p-form">
        <p className="p-form-text">
          Entiendo y acepto que al subir una fotografía a Mirame hago saber
          públicamente que
        </p>
        <p className="p-form-text">
          considero que la persona en la fotografía está ausente desaparecida y
          en riesgo,
        </p>
        <p className="p-form-text">
          {" "}
          y que cualquier persona puede ver la fotografía.
        </p>
      </div>

      {/* radio-button */}
      <div className="genero-form">
        <div className="input-container">
          <input
            type="radio"
            name="condicion"
            value="acepto"
            
            checked={form.condicion === "acepto"}
            onChange={handleChange}
            required
            onBlur={handleBlur}
            id="acepto"
            className="rbtn-genero"
          />
          <div className="radio-title">
            <Label text_label={"ACEPTO"} htmlFor={"acepto"} />
          </div>
        </div>

        <div className="input-container">
          <input
            type="radio"
            name="condicion"
            value="no acepto"
            checked={form.condicion === "no acepto"}
            onChange={handleChange}
            onBlur={handleBlur}
            className="rbtn-genero"
            required
            id="no acepto"
          />
          <div className="radio-title">
            <Label text_label={"NO ACEPTO"} htmlFor={"no acepto"} />
          </div>
        </div>
      </div>
      {errors.condicion && (
        <p className="p-text-form-error">{errors.condicion}</p>
      )}

      <section>
        <strong className="p-form-text">REQUISITOS:</strong>
        <span className="p-form-text">
          Los siguientes requisitos ayudara a tener una mejor calidad de
          fotografia
        </span>
        <ul>
          <li className="p-form-text">
            La fotografia tiene que ser reciente y nitida
          </li>

          <li className="p-form-text">
            La persona debe de estar de frente y sus rasgos deben estar visibles
          </li>
          <li className="p-form-text">
            No se aceptarán fotografías borrosas, manchadas o alteradas
          </li>
          <li className="p-form-text">
            La imagen debe ser en formato de archivo JPEG,JPG
          </li>
        </ul>
      </section>

      <div className="container-upload-image">
      <label className="upload-label" onClick={handleButtonClick}>
        {/* Contenido del label, como una vista previa de la imagen */}
        <img src={pathImage} className="fotografia" alt="Vista previa" />
        {/* Agrega aquí cualquier otro contenido que desees */}
      </label>

      <div className="src-file1">
        <input
          type="file"
          name="img"
          accept="image/*"
          aria-label="Archivo"
          className="input-update"
          hidden
          onChange={onFileChnage}
        />

        
      </div>
      {/* Botón para cambiar la imagen */}
        <button type="button" onClick={handleButtonClick}  className="btn-cambiar-img">
        
          Cambiar Imagen
        </button>
    </div>

      <section>
        <span>
   
        </span>
      </section>
    </div>
  );
}
export default Fotografia_usuario_registrado;
