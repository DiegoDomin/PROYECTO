import { useEffect, useState } from "react";
import { useTable } from "react-table";
import Table from "../Table/Table";
import HeaderAD from "../header-admin/Header-admin";
import { getAllForm } from "../../services/form.service";

function ReportarCaso() {
  const [formData, setFormData] = useState([]);
  const [approvedData, setApprovedData] = useState([]);

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

  const handleApprove = (row) => {
    const updatedRow = { ...row.original, status: "aprobado" };
    setFormData((prevFormData) =>
      prevFormData.map((data) =>
        data._id === row.original._id ? updatedRow : data
      )
    );
    setApprovedData((prevApprovedData) => [...prevApprovedData, updatedRow]);
  };

  const columnsP = [
    {
      Header: "id",
      accessor: "_id",
    },
    {
      Header: "Nombre",
      accessor: "name",
    },
    {
      Header: "Apellido",
      accessor: "last_name",
    },
    {
      Header: "Edad",
      accessor: "fecha_nacimiento",
    },
    {
      Header: "Genero",
      accessor: "gender",
    },
    {
      Header: "Acciones",
      Cell: ({ row }) => (
        <>
          <button onClick={() => handleApprove(row)}>Aprobar</button>
          <button>Eliminar</button>
        </>
      ),
    },
  ];


  const columnsA = [
    {
      Header: "id",
      accessor: "_id",
    },
    {
      Header: "Nombre",
      accessor: "name",
    },
    {
      Header: "Apellido",
      accessor: "last_name",
    },
    {
      Header: "Edad",
      accessor: "fecha_nacimiento",
    },
    {
      Header: "Genero",
      accessor: "gender",
    },
    {
      Header: "Acciones",
      Cell: () => <p>APROBADO</p>,
    },
  ];

  const {
    getTableProps: getTablePropsP,
    getTableBodyProps: getTableBodyPropsP,
    headerGroups: headerGroupsP,
    rows: rowsP,
    prepareRow: prepareRowP,
  } = useTable({ columns: columnsP, data: formData });

  const {
    getTableProps: getTablePropsA,
    getTableBodyProps: getTableBodyPropsA,
    headerGroups: headerGroupsA,
    rows: rowsA,
    prepareRow: prepareRowA,
  } = useTable({ columns: columnsA, data: approvedData });

  return (
    <>
      <HeaderAD />
      <div className="container-body-reportar-caso">
        <h1 className="title">REPORTES PENDIENTES</h1>
        <section className="table_pendiente">
          <Table
            getTableProps={getTablePropsP}
            getTableBodyProps={getTableBodyPropsP}
            headerGroups={headerGroupsP}
            rows={rowsP}
            prepareRow={prepareRowP}
          />
        </section>

        <h1 className="title">REPORTES Aprobados</h1>
        <section className="table_aprobado">
          <Table
            getTableProps={getTablePropsA}
            getTableBodyProps={getTableBodyPropsA}
            headerGroups={headerGroupsA}
            rows={rowsA}
            prepareRow={prepareRowA}
          />
        </section>
      </div>
    </>
  );
}

export default ReportarCaso;
