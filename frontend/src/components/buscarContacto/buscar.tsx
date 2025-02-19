import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getContactos } from "../../services/api";
import { TContacto } from "../../services/types";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

const Buscar = () => {
  const [contactos, setContactos] = useState<TContacto[]>([]);
  const [filtrarContactos, setFiltrarContactos] = useState<TContacto[]>([]);
  const [buscar, setBuscar] = useState("");
  const [busquedaModificada, setBusquedaModificada] = useState(false);

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

  const handleBusqueda = () => {
    const filtered = contactos.filter(
      (contacto) =>
        contacto.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
        contacto.telefono.includes(buscar) ||
        contacto.email.toLowerCase().includes(buscar.toLowerCase())
    );
    setFiltrarContactos(filtered);
    setBusquedaModificada(true);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "nombre", headerName: "Nombre", flex: 1 },
    { field: "telefono", headerName: "Telefono", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
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
        Buscar contacto
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <TextField
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
          label="Buscar"
          variant="outlined"
        />
        <Button
          variant="contained"
          onClick={handleBusqueda}
          sx={{ marginLeft: "10px", background: "#121621" }}
          disabled={!buscar}
        >
          Buscar
        </Button>
      </Box>
      <Paper sx={{ height: 500, width: "90%" }}>
        {busquedaModificada ? (
          <DataGrid
            rows={filtrarContactos}
            columns={columns}
            pageSizeOptions={[5, 10]}
            sx={{ border: 0 }}
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
          />
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Typography sx={{ marginTop: "20px" }}>
              No hay resultados para mostrar.
            </Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default Buscar;
