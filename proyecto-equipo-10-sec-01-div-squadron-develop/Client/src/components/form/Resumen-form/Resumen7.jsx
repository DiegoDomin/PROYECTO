

import Label from '../../label/Label';
import { useEffect, useState } from 'react';
// Componente que renderiza los datos de los tres formularios
function Resumen7({formKey}) {
    const [form,setForm]=useState('');
    const getData = () => {
        const storedData = localStorage.getItem(formKey);
        return storedData ? JSON.parse(storedData) : null;
      };
      useEffect(() => {
        setForm(getData());
      }, [formKey]);


//     //   const [image, setImage] = useState(null);
//   const [fileName, setFileName] = useState(
//     "No has seleccionado ningun archivo"
//   );

  
      return (
        <div>
          {form ? (
            <>
         

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
    //   onChange={handleChange}
      required
    //   onBlur={handleBlur}
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
    //   onChange={handleChange}
    //   onBlur={handleBlur}
      className="rbtn-genero"
      required
      id="no acepto"
    />
    <div className="radio-title">
      <Label text_label={"NO ACEPTO"} htmlFor={"no acepto"} />
    </div>
  </div>
</div>
{/* {errors.condicion && (
  <p className="p-text-form-error">{errors.condicion}</p>
)} */}

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
  <label
    className="upload-label"
    onClick={() => document.querySelector(".input-update").click()}
  ></label>
  <div className="src-file1">
    <input
      type="file"
      name="fotografia"
      accept="image/*"
      aria-label="Archivo"
      className="input-update"
      hidden
      value={form.fotografia}
      onBlur={onblur}
    //   onChange={({ target: { files } }) => handleImageChange(files)}

    />
 
  </div>
</div>
<section>
  <span
    // onClick={() => {
    //   setFileName("Selecciones la fotografia");
    //   setImage(null);
    // }}
    // className="s-form-fotografia"
  >
    {/* {fileName} */}
  </span>
</section>
            </>
          ) : (
            <p>No hay datos disponibles</p>
          )}
        </div>
      );
          }
 export default Resumen7















