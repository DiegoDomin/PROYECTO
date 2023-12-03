import Label from "../../label/Label"
import { Validation } from "../../../assets/Validation/validaciones/Validation"
import { useLocalStorage } from "../../../assets/Validation/validaciones/useLocalStorage";
function Vestimenta(){
  const initialForm = {
    infoVestimenta: "",
  };


  const [storedForm] = useLocalStorage("VestimentaReportar",initialForm);

  // Uso del componente Validation con el hook useLocalStorage
  const { form, errors, handleChange, handleBlur } = Validation(
    storedForm,
    "VestimentaReportar"
         );

return(
    
    <div className="input-form-vestimenta">
    <h2 className="text-title-form-inputs">Informacion sobre la vestimenta</h2>

       <Label  text_label={"Vestimenta"} htmlFor={"vestimenta"}/>
     <textarea placeholder="Ej. Camisa manga larga color roja, pantalon jeans azules, zapatos color blancos marca adidas" className="txtArea-form"
     name="infoVestimenta"
         onChange={handleChange}
          onBlur={handleBlur}
          value={form.infoVestimenta}
          required
          id="vestimenta"
          >
         
     </textarea>
     {errors.infoVestimenta && <p className="p-text-form-error">{errors.infoVestimenta}</p>}

</div>



)


}

export default Vestimenta