import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import icon_anterior from "../../assets/icons/icon-anterior.png";
import icon_siguiente from "../../assets/icons/icon-siguiente.png";

function Table({ data, columns }) {
    //columns encabezados de la tabla

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),

    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <table className="pendiente">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="container-bnt-table">
        <button onClick={() => table.previousPage()} className="btn-back-table">
          <img src={icon_anterior} className="icon-anterior" />
          Anterior
        </button>
        <div className="buttons-table">
          <button onClick={() => table.nextPage()} className="btn-next-table">
            Siguiente
            <img src={icon_siguiente} className="icon-siguiente" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
