import Table from "../Table/Table";
import HeaderAD from "../header-admin/Header-admin";
import icon_PDF from "../../assets/icons/icon-PDF.png"
import { getAllForm,deleteFormById } from "../../services/form.service";
import { generatorPDF } from "../../services/form.service";
import { useEffect, useState } from "react";
function ReportarCaso() {
  const [formData, setFormData] = useState([]);

  const [approvedData, setApprovedData] = useState([]);

  const handleApprove = async (id) => {
    try {
      if (!id) {
        console.error("ID no válido:", id);
        return;
      }
  
      // Aquí debes llamar a la función que realiza la aprobación
      // Por ejemplo, podrías tener una función llamada approveFormById en tu servicio.
      // await approveFormById(id);
  
      // Actualizar los datos después de aprobar
      setApprovedData((prevData) => {
        const approvedForm = formData.find((form) => form._id === id);
        return [...prevData, approvedForm];
      });
  
      // Eliminar el formulario de la lista de pendientes
      setFormData((prevData) => prevData.filter((form) => form._id !== id));
  
      // Mostrar automáticamente el formulario aprobado
      // (Puedes ajustar cómo manejas esto según tu estructura y lógica de presentación)
      console.log("Mostrar formulario aprobado:", approvedForm);
    } catch (error) {
      console.error("Error al aprobar el formulario:", error);
      // Puedes mostrar un mensaje de error al usuario si lo prefieres
    }
  };
  

  const downloadPDF = async (id) => {
    try {
      const pdfData = await generatorPDF(id);

      // Crear un Blob desde los datos binarios del PDF
      const blob = new Blob([pdfData], { type: 'application/pdf' });

      // Crear un enlace (link) para descargar el PDF
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `reporte_${id}.pdf`;
      link.click();
    } catch (error) {
      console.error("Error al descargar el PDF:", error);
      // Puedes mostrar un mensaje de error al usuario si lo prefieres
    }
  };
  
  const handleDelete = async (id) => {
    try {
      if (!id) {
        console.error("ID no válido:", id);
        return;
      }
  
      // Llamar a la función para eliminar el formulario por ID
      await deleteFormById(id);
  
      // Actualizar los datos después de eliminar
      setFormData((prevData) => prevData.filter((form) => form._id !== id));
    } catch (error) {
      console.error("Error al eliminar el formulario:", error);
      // Puedes mostrar un mensaje de error al usuario si lo prefieres
    }
  };
  


  const columnsP = [
    //aca van los encabezados
    
    {
      header: "Descargar PDF",
      cell: ({ row }) => (
        <img
          src={icon_PDF}
          alt="Descargar PDF"
          className="icon-PDF"
          onClick={() => downloadPDF(row.original._id)}
          style={{ width: '40px', height: '40px',justifyContent:"center",margin:"0 0 0 20%",cursor:"pointer" }} // Ajusta el tamaño según tus preferencias

        />
      ),
    },



    {
      header: "id",
      accessorKey: "_id",
    },

    {
      header: "Nombre",
      //lee los valores de cada objeto
      accessorKey: "name",
    },
    {
      header: "Apellido",
      //lee los valores de cada objeto
      accessorKey: "last_name",
    },
    {
      header: "Fecha de nacimiento",
      //lee los valores de cada objeto
      accessorKey: "fecha_nacimiento",
    },
    {
      header: "Genero",
      //lee los valores de cada objeto
      accessorKey: "gender",
    },
    {
      header:"Acciones",
      cell:((row)=>
      <>
  <button onClick={() => handleApprove(row.original._id)}>Aprobar</button>
      <button onClick={() => handleDelete(row.original._id)}>Eliminar</button>          
          </>
      )
    }
    // {
    //     header: "Acciones",
    //     cell:({row})=> (
    //       // console.log('Objeto row:', row.original),

    //     <Modals nombre={row.original.nombre_completo} titulo={"Modificar reporte"} parrafo={"Al editar el reporte asegurese de modificarlo correctamente, al enviarlo se realizara la respectiva revision y se le notificara por correo si es aprobado"}> <img src={icon_editar} className="icon-editar"/></Modals>)

    // }
  ];





  const columnsA = [
    //aca van los encabezados

    {
      header: "Nombre",
      //lee los valores de cada objeto
      accessorKey: "name",
    },
    {
      header: "Apellido",
      //lee los valores de cada objeto
      accessorKey: "last_name",
    },
    {
      header: "Edad",
      //lee los valores de cada objeto
      accessorKey: "fecha_nacimiento",
    },
    {
      header: "Genero",
      //lee los valores de cada objeto
      accessorKey: "gender",
    },
    {
      header:"Acciones",
      cell:((val)=>
        <p>APROBADO</p>
      )
    }
  ]


  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllForm();
        console.log('Datos obtenidos:', data);
        setFormData(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
  
    fetchData();
  }, []);
  

 



 













  return (
    <>
      <HeaderAD />
      <div className="container-body-reportar-caso">
        <h1 className="title">REPORTES PENDIENTES</h1>
        <section className="table_pendiente">
          <Table data={formData}  columns={columnsP} />
        </section>

        <h1 className="title">REPORTES Aprobados</h1>
        <section className="table_pendiente">
          <Table data={approvedData}  columns={columnsA} />
        </section>
      </div>
    </>
  );
}

export default ReportarCaso;