import { Validation } from "../../../assets/Validation/validaciones/Validation";
import Discapacidad from './Discapacidad';  // Ajusta la ruta según tu estructura de archivos

function FormularioCompleto() {
  // ... (otros imports y lógica del formulario)

  // Usa el hook Validation en tu componente principal
  const { form, submitForm } = Validation();

  const handleFinalSubmit = async () => {
    // Puedes realizar otras acciones o lógica aquí antes de enviar el formulario
    // ...

    // Llama a submitForm para enviar el formulario a la API
    await submitForm(form);
  };

  return (
    <div>
      {/* ... (otros pasos del formulario) */}
      {/* Por ejemplo, si tienes un componente Discapacidad */}
      <Discapacidad />
      
      {/* Botón para enviar el formulario al final */}
      <button type="button" onClick={handleFinalSubmit}>
        Enviar Formulario a la API
      </button>
    </div>
  );
}

export default FormularioCompleto;
