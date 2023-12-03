import { NavLink } from "react-router-dom";
import Table from "../Table/Table";
import bannerMirame from "../../assets/img/banner-mirame.png";
import icon_editar from "../../assets/icons/icon-editar.png";
import Modals from "../modal/Modals";
import { getAllForm } from "../../services/form.service";
import { useEffect,useState } from "react";
function ReportarCaso(){
  const [formData, setFormData] = useState([]);

    const columns = [
        //aca van los encabezados
        {
          header: "Nombre completo",
          //lee los valores de cada objeto
          accessorKey: "name",
          
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
            header: "Acciones",
            cell:({row})=> (
              // console.log('Objeto row:', row.original),

            <Modals nombre={row.original.nombre_completo} titulo={"Modificar reporte"} parrafo={"Al editar el reporte asegurese de modificarlo correctamente, al enviarlo se realizara la respectiva revision y se le notificara por correo si es aprobado"}> <img src={icon_editar} className="icon-editar"/></Modals>)
            
        }
      ];
      useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllForm();
            setFormData(data);
          } catch (error) {
            console.error('Error al obtener los datos:', error);
          }
        };
    
        fetchData();
      }, []);
    
    return (
        <>
            <div className="container-body-reportar-caso">
              <h1 className="title">REPORTAR CASO</h1>
                <section className="container-reportar-caso">

                            <h2 className="title">Reportar caso de desaparicion</h2>
                            <p className="text-reportar-caso">Luego de las 24 horas de la desaparicion reporte el caso</p>

                            <NavLink to="/reportar-caso-usuario-form"><button className="btn-next" >Reportar</button></NavLink>


                </section>
                <section className="table_pendiente">
        <Table data={formData} columns={columns}/>
                        </section>

            </div>
            <article className="banner-mirame">
            <img src={bannerMirame} />
</article>
        </>
      );

}

export default ReportarCaso;