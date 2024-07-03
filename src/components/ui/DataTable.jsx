import PropTypes from "prop-types";
import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";
import { Icons } from "../Icons";
import { Button } from "./Button";
import { Skeleton } from "./Skeleton"

function DataTable({
  columns,
  data,
  isLoading,
  rowSelection={},
  setRowSelection= () => {},
  emptySlateMessage="No result.",
}) {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    defaultColumn: {
      size: 570, //starting column size
      minSize: 50, //enforced during column resizing
      maxSize: 500, //enforced during column resizing
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  });

  return (
    <div className="bg-white shadow rounded-lg space-y-4 pb-3 border border-gray-300/45 w-full">
        <div className="rounded-md">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column?.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {isLoading && !table.getRowModel().rows?.length ? (
                Array.from({ length: 10 }).map((_, idx) => (
                  <TableRow key={idx}>
                    <TableCell colSpan={columns.length} className="px-1 pt-1 pb-3">
                        <div className="w-full h-3 rounded-sm">
                          <Skeleton className={`w-full h-3 mt-2`} />
                        </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : !isLoading && table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center font-medium text-md text-gray-700/90 font-raleway">
                    {emptySlateMessage}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between pl-4">
          <div className="flex-1 text-sm text-muted-foreground font-nunito">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>

          <div className="flex items-center justify-end px-3 gap-x-2">
            <Button
              variant="ghost"
              size="none"
              onClick={() => table.previousPage()}
              className="py-0.5 px-1 disabled:opacity-60 text-[.84rem] text-muted-foreground font-normal font-nunito"
              isDisabled={!table.getCanPreviousPage()}
            >
              <Icons.arrowLeftS strokeWidth={0.6} className="w-4 h-4" />
              Previous
            </Button>

            <Button
              variant="ghost"
              size="none"
              onClick={() => table.nextPage()}
              className="py-0.5 px-1 disabled:opacity-60 text-[.84rem] text-muted-foreground font-normal font-nunito"
              isDisabled={!table.getCanNextPage()}
            >
              Next
              <Icons.arrowRightS strokeWidth={0.6} className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
  )
}

DataTable.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    rowSelection: PropTypes.object,
    setRowSelection: PropTypes.func,
    emptySlateMessage: PropTypes.string,
    filterValue: PropTypes.string,
    showSearchBar: PropTypes.bool
}

export default DataTable;