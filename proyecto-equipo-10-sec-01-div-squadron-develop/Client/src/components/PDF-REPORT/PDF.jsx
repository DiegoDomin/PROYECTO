import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";

import DocuPDF from "./PDF-REPORT";


function PDF() {
  const [verPDF, setVerPDF] = useState(false);//vista del pdf
 
 
  return(
  <div style={{minHeight:"100vh"}}>
  <div>
{/* DESCARGAR PDF */}
<PDFDownloadLink document={<DocuPDF formKey={"CrearCuenta"}/>} filename={"Registro.pdf"}>
    <button >DEscargar pdf</button>
</PDFDownloadLink>



    {/* VER FDP */}
    <button onClick={()=>{
        setVerPDF(!verPDF)
    }}>{verPDF?"OCULTAR PDF":"VER PDF"}</button>


{/* VA ENCAPSULADO DENTRO DE UN FRAGMETNO */}

<>
    {/* SE CREA UNA VALIDACION EN DONDE SI VER PDF ES VERDADERO MUESTA ALGO , es para ver el pdf*/}
    {verPDF ?
    <PDFViewer style={{width:"100%",height:"90vh"}}>
    <DocuPDF  formKey={"CaracterististicasFisicasReportar"}/>
    </PDFViewer>:null}
</>







  </div>
  </div>)



}

export default PDF;