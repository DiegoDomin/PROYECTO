import Table from "../Table/Table";
import HeaderAD from "../header-admin/Header-admin";
import icon_PDF from "../../assets/icons/icon-PDF.png"
import { getAllForm } from "../../services/form.service";
import { generatorPDF } from "../../services/form.service";
import { useEffect, useState } from "react";
function ReportarCaso() {
  const [formData, setFormData] = useState([]);

  const [approvedData, setApprovedData] = useState([]);

  
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
  
  const columnsP = [
    //aca van los encabezados
    
    {
      header: "Descargar PDF",
      cell: ({ row }) => (
        <img
          src={icon_PDF}
          alt="Descargar PDF"
          className="icon-descargar-pdf"
          onClick={() => downloadPDF(row.original._id)}
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
      <>
<button onClick={() => handleApprove(val)}>Aprobar</button>
          <button >Eliminar</button></>
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