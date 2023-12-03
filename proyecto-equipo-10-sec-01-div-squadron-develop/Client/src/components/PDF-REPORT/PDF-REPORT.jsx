import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import desaparecido from "../../assets/img/img-perfil.png";
import logo from "../../assets/img/logo.png";
import { useState,useEffect } from "react";
const PDF_REPORT = ({formKey}) => {
  const [form,setForm]=useState('');
  const getData = () => {
      const storedData = localStorage.getItem(formKey);
      return storedData ? JSON.parse(storedData) : null;
    };
    useEffect(() => {
      setForm(getData());
    }, [formKey]);


  return (
    <Document>
        {form ? (
      <Page
        size="A4"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "#f8f9fa", // Fondo gris claro
        }}
      >
        <View
          style={{
            backgroundColor: "#fff", // Fondo blanco
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra suave
            width: "80%",
          }}
        >
         <View style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "white", padding: 10 }}>
  <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
    <Image src={logo} style={{ width: "80px", height: "80px" ,padding:"0 5px"}} />
    <Text style={{ color: "#000000", fontSize: "20px", marginVertical: "10px", textAlign: "center",padding:"0 20px" }}>
      PERSONA DESAPARECIDA
    </Text>
  </View>
</View>
      <Text style={{ color: "#3388af", fontSize: "18px", fontWeight: "bold", marginBottom: "10px", textAlign: "center" }}>

</Text>

{/* contenedor */}
<View style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
<View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
  <Image src={desaparecido} alt="random image" style={{ maxWidth: "100px", maxHeight: "100" }} />
</View>


  {/* DATOS GENERALES */}
  <Text style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>DATOS GENERALES</Text>
  <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <View style={{ marginBottom: "20px",padding:"10px 0" }}>
    <View style={{ marginBottom: "10px" }}>
   

    <Text>Nombres: {form && form.nameReport}</Text>
      </View>
      <View style={{ marginBottom: "10px" }}>
      <Text>Apellidos: {form && form.lastNameReport}</Text>
      </View>
      <View style={{ marginBottom: "10px" }}>

      <Text>Fecha de nacimiento: {form && form.fechaNacimiento}</Text>
      </View>
      <View style={{ marginBottom: "10px" }}>

      <Text>Genero: {form && form.genero}</Text>
      </View>
      <Text>Vestimenta que llevaba puesta: {form && form.vestimenta}</Text>
    </View>
  </View>

  {/* CARACTERISTICAS FISICAS */}
  <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <Text style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>CARACTERISTICAS FISICAS</Text>
    <View style={{ marginBottom: "10px" }}>
    <View style={{ marginBottom: "10px" }}>
  

      <Text>Color de cabello:{form && form.colorCabello}</Text>
      </View>
      <View style={{ marginBottom: "10px" }}>

      <Text>Tez:{form && form.tez}</Text>
      </View>
      <View style={{ marginBottom: "10px" }}>

      <Text>Color de ojos: {form && form.colorOjos}</Text>
      </View>
      <View style={{ marginBottom: "10px" }}>

      <Text>Altura:{form && form.altura}</Text>
      </View>
      <View style={{ marginBottom: "10px" }}>
   
      <Text>Forma del rostro: {form && form.rostro}</Text>
      </View>
      <Text>Discapacidad: {form && form.discapacidad}</Text>
      <Text>Descripcion de la Discapacidad: {form && form.descDiscapacidad}</Text>
    </View>
  </View>

  {/* fecha y hora */}
  <Text style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px", marginBottom: "10px" }}>FECHA Y HORA DE LA DESAPARICION</Text>
  <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <View style={{ marginBottom: "10px" }}>
      <Text>Fecha de desaparición: {form && form.fecha}</Text>
      <Text>Hora estimada de la desaparicion: {form && form.hora}</Text>
      <Text>Ultimo Lugar donde fue visto {form && form.lugar}</Text>

    </View>
  </View>
</View>

        
        </View>
      </Page>
      ) : (
            <p>No hay datos disponibles</p>
          )}
    </Document>
  );
};

export default PDF_REPORT;








// import Label from '../../label/Label';
// import { useEffect, useState } from 'react';
// // Componente que renderiza los datos de los tres formularios
// function Resumen({formKey}) {
//     const [form,setForm]=useState('');
//     const getData = () => {
//         const storedData = localStorage.getItem(formKey);
//         return storedData ? JSON.parse(storedData) : null;
//       };
//       useEffect(() => {
//         setForm(getData());
//       }, [formKey]);
//       return (
//         <div>
//           {form ? (
//             <>
//             <Label text_label={"Nombres"} htmlFor={"name2"} />
//             <input
//         type="text"
//         name="nameReport"
//         placeholder="Ej. Marcos Jose"
      
//         value={form.nameReport}
//         required
//         id="name2"
//         />
//         <Label text_label={"Nombres"} htmlFor={"name2"} />
//       <input
//         type="text"
//         name="nameReport"
//         placeholder="Ej. Marcos Jose"
//         // onChange={handleChange}
//         // onBlur={handleBlur}
//         value={form.lastNameReport}
//         required
//         id="name2"
//       />
//         <Label text_label={"Fecha de nacimiento"} htmlFor={"fechaNacimiento"} />
//        <input
//         type="date"
//         name="fechaNacimiento"
     
//         value={form.fechaNacimiento}
//         required
//         id="fechaNacimiento"
//       />
//             </>
//           ) : (
//             <p>No hay datos disponibles</p>
//           )}
//         </div>
//       );
// }
//  export default Resumen
