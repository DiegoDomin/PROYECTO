
import { useNavigate } from 'react-router-dom';

import { Validation } from "../../assets/Validation/validaciones/Validation";

export const Button = ({
  steps,
  pages,
  setPages,
  setComplete,
  lugarOpcion,
}) => {
  const {clearForm}=Validation()
  const navigate = useNavigate();
  const handlePrevClick = () => {
    if (pages > 1) {
      setPages(pages - 1);
      Validation({ pages: pages - 1, steps });
    }
  };

  const handleNextClick = () => {
    if (pages < steps.length) {
      setPages(pages + 1);
      Validation({ pages: pages + 1, steps })
    } else {
      setComplete(true);
    
      alert('Formulario enviado');
      navigate(lugarOpcion);
      clearForm()

    }
  };

  return (
    <div className="buttons">
    

      {/* Renderizar el botón de retroceso si no estamos en la primera página */}
      {pages > 1 && <button onClick={handlePrevClick} className="btn-back">Anterior</button>}

      {/* Renderizar el botón de siguiente si no estamos en la última página o es el último paso */}
      {pages < steps.length ? (
        <button onClick={handleNextClick} className="btn-next" type='button'>Siguiente</button>
      ) : null}
      
   
    </div>
  );
};
