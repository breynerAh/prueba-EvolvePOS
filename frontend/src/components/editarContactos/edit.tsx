import { useEffect, useState } from "react";
import { getContactos } from "../../services/api";
import { TContacto } from "../../services/types";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Box, Paper, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const [contactos, setContactos] = useState<TContacto[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacto = async () => {
      try {
        const data = await getContactos();
        setContactos(data);
      } catch (error) {
        console.error("Error inesperado.", error);
      }
    };

    fetchContacto();
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "nombre", headerName: "Nombre", flex: 1 },
    { field: "telefono", headerName: "Telefono", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "action",
      headerName: "Acción",
      align: "center",
      headerAlign: "center",
      flex: 2,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <Box sx={{ cursor: "pointer" }}>
            <EditIcon onClick={() => navigate(`/crear?id=${params.row.id}`)} />
          </Box>
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Typography
        sx={{ fontFamily: "sans-serif", fontSize: "17px", color: "#121621" }}
      >
        Listado de contactos
      </Typography>
      <Paper sx={{ height: 500, width: "90%" }}>
        <DataGrid
          rows={contactos || []}
          columns={columns}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      </Paper>
    </Box>
  );
};

export default Edit;
