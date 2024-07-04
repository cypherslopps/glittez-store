import { useState } from "react"
import PropTypes from "prop-types";
import DataTable from "../ui/DataTable"
import { columns } from "./Columns";

 
function UserTable({ data=[], isLoading }) { 
  const [rowSelection, setRowSelection] = useState({});
  
  return (
    <div className="w-full relative">
      <DataTable 
        columns={columns} 
        data={data} 
        isLoading={isLoading}
        setRowSelection={setRowSelection}
        rowSelection={rowSelection}
        emptySlateMessage="No Users."
      />
    </div>
  )
}

UserTable.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
}

export default UserTable;