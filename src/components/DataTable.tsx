import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Container } from "@mui/material";
import { StudentResponseType } from "../types/Student";

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 1.5 },
  { field: "city", headerName: "City", flex: 1 },
  { field: "phone", headerName: "Phone", flex: 1 },
  { field: "createdAt", headerName: "Created", flex: 1 },
  { field: "updatedAt", headerName: "Updated", flex: 1 },
];

type DataTableProps = {
  data: StudentResponseType[];
};

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const formattedData = data.map((item) => ({
    ...item,
    id: item._id,
    createdAt: new Date(item.createdAt).toDateString(),
    updatedAt: new Date(item.updatedAt).toDateString(),
  }));

  return (
    <Container>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={formattedData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          disableRowSelectionOnClick
        />
      </div>
    </Container>
  );
};

export default DataTable;
