import { useState } from "react"
import PropTypes from "prop-types";
import DataTable from "../ui/DataTable"
import { columns } from "./Columns";

 
function CategoriesTable({ data=[], isLoading }) { 
  const [rowSelection, setRowSelection] = useState({});
  
  return (
    <div className="w-full relative">
      <DataTable 
        columns={columns} 
        data={data} 
        isLoading={isLoading}
        setRowSelection={setRowSelection}
        rowSelection={rowSelection}
        emptySlateMessage="No SubCategories."
      />
    </div>
  )
}

CategoriesTable.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
}

export default CategoriesTable;